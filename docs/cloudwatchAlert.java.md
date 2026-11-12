# `cloudwatchAlert` Submodule <a name="`cloudwatchAlert` Submodule" id="@cdktn/provider-awscc.cloudwatchAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlert <a name="CloudwatchAlert" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlert;

CloudwatchAlert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .rule(CloudwatchAlertRule)
    .spaceId(java.lang.String)
//  .description(java.lang.String)
//  .notificationRules(IResolvable|java.util.List<CloudwatchAlertNotificationRules>)
//  .notificationsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<CloudwatchAlertTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.spaceId">spaceId</a></code> | <code>java.lang.String</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationRules">notificationRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>></code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationsEnabled">notificationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.spaceId"></a>

- *Type:* java.lang.String

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `notificationRules`<sup>Optional</sup> <a name="notificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>>

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `notificationsEnabled`<sup>Optional</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules">putNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules">resetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled">resetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationRules` <a name="putNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules"></a>

```java
public void putNotificationRules(IResolvable|java.util.List<CloudwatchAlertNotificationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule"></a>

```java
public void putRule(CloudwatchAlertRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchAlertTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetNotificationRules` <a name="resetNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules"></a>

```java
public void resetNotificationRules()
```

##### `resetNotificationsEnabled` <a name="resetNotificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled"></a>

```java
public void resetNotificationsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlert;

CloudwatchAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlert;

CloudwatchAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlert;

CloudwatchAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlert;

CloudwatchAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId">alertId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput">notificationRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput">notificationsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput">spaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled">notificationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId"></a>

```java
public java.lang.String getAlertId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules"></a>

```java
public CloudwatchAlertNotificationRulesList getNotificationRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule"></a>

```java
public CloudwatchAlertRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags"></a>

```java
public CloudwatchAlertTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationRulesInput`<sup>Optional</sup> <a name="notificationRulesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertNotificationRules> getNotificationRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>>

---

##### `notificationsEnabledInput`<sup>Optional</sup> <a name="notificationsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getNotificationsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput"></a>

```java
public IResolvable|CloudwatchAlertRule getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput"></a>

```java
public java.lang.String getSpaceIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationsEnabled`<sup>Required</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNotificationsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlertConfig <a name="CloudwatchAlertConfig" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertConfig;

CloudwatchAlertConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .profileId(java.lang.String)
    .rule(CloudwatchAlertRule)
    .spaceId(java.lang.String)
//  .description(java.lang.String)
//  .notificationRules(IResolvable|java.util.List<CloudwatchAlertNotificationRules>)
//  .notificationsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<CloudwatchAlertTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name">name</a></code> | <code>java.lang.String</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules">notificationRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>></code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled">notificationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule"></a>

```java
public CloudwatchAlertRule getRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `notificationRules`<sup>Optional</sup> <a name="notificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertNotificationRules> getNotificationRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>>

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `notificationsEnabled`<sup>Optional</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNotificationsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

### CloudwatchAlertNotificationRules <a name="CloudwatchAlertNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRules;

CloudwatchAlertNotificationRules.builder()
//  .target(CloudwatchAlertNotificationRulesTarget)
//  .trigger(CloudwatchAlertNotificationRulesTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | Where the notification is sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | The alert states that trigger the notification rule. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target"></a>

```java
public CloudwatchAlertNotificationRulesTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

Where the notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#target CloudwatchAlert#target}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger"></a>

```java
public CloudwatchAlertNotificationRulesTrigger getTrigger();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

The alert states that trigger the notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#trigger CloudwatchAlert#trigger}

---

### CloudwatchAlertNotificationRulesTarget <a name="CloudwatchAlertNotificationRulesTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesTarget;

CloudwatchAlertNotificationRulesTarget.builder()
//  .arn(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Settings specific to the target, as key-value pairs (up to 20). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type">type</a></code> | <code>java.lang.String</code> | The target type. Valid values: sns, slack, pagerduty. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the target.

For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Settings specific to the target, as key-value pairs (up to 20).

The keys depend on the integration type. Not used for sns targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The target type. Valid values: sns, slack, pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}

---

### CloudwatchAlertNotificationRulesTrigger <a name="CloudwatchAlertNotificationRulesTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesTrigger;

CloudwatchAlertNotificationRulesTrigger.builder()
//  .stateValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues">stateValues</a></code> | <code>java.util.List<java.lang.String></code> | The alert states that trigger this rule. |

---

##### `stateValues`<sup>Optional</sup> <a name="stateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues"></a>

```java
public java.util.List<java.lang.String> getStateValues();
```

- *Type:* java.util.List<java.lang.String>

The alert states that trigger this rule.

A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}

---

### CloudwatchAlertRule <a name="CloudwatchAlertRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRule;

CloudwatchAlertRule.builder()
    .telemetryRule(CloudwatchAlertRuleTelemetryRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled. |

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule"></a>

```java
public CloudwatchAlertRuleTelemetryRule getTelemetryRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}

---

### CloudwatchAlertRuleTelemetryRule <a name="CloudwatchAlertRuleTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRule;

CloudwatchAlertRuleTelemetryRule.builder()
    .condition(CloudwatchAlertRuleTelemetryRuleCondition)
    .evaluation(CloudwatchAlertRuleTelemetryRuleEvaluation)
    .query(CloudwatchAlertRuleTelemetryRuleQuery)
//  .noData(CloudwatchAlertRuleTelemetryRuleNoData)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | How often the alert is evaluated, and how long a change must last before the state changes. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | The query the alert runs, and the language it is written in. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition"></a>

```java
public CloudwatchAlertRuleTelemetryRuleCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation"></a>

```java
public CloudwatchAlertRuleTelemetryRuleEvaluation getEvaluation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

How often the alert is evaluated, and how long a change must last before the state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query"></a>

```java
public CloudwatchAlertRuleTelemetryRuleQuery getQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

The query the alert runs, and the language it is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}

---

##### `noData`<sup>Optional</sup> <a name="noData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData"></a>

```java
public CloudwatchAlertRuleTelemetryRuleNoData getNoData();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}

---

### CloudwatchAlertRuleTelemetryRuleCondition <a name="CloudwatchAlertRuleTelemetryRuleCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleCondition;

CloudwatchAlertRuleTelemetryRuleCondition.builder()
//  .comparator(java.lang.String)
//  .criticalThreshold(java.lang.Number)
//  .thresholdField(java.lang.String)
//  .thresholdMode(java.lang.String)
//  .warningThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator">comparator</a></code> | <code>java.lang.String</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold">criticalThreshold</a></code> | <code>java.lang.Number</code> | The value at which the alert enters the CRITICAL state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField">thresholdField</a></code> | <code>java.lang.String</code> | The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode">thresholdMode</a></code> | <code>java.lang.String</code> | How the threshold is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | The value at which the alert enters the WARNING state. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator"></a>

```java
public java.lang.String getComparator();
```

- *Type:* java.lang.String

The comparison operator.

Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}

---

##### `criticalThreshold`<sup>Optional</sup> <a name="criticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```java
public java.lang.Number getCriticalThreshold();
```

- *Type:* java.lang.Number

The value at which the alert enters the CRITICAL state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}

---

##### `thresholdField`<sup>Optional</sup> <a name="thresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```java
public java.lang.String getThresholdField();
```

- *Type:* java.lang.String

The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}

---

##### `thresholdMode`<sup>Optional</sup> <a name="thresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```java
public java.lang.String getThresholdMode();
```

- *Type:* java.lang.String

How the threshold is applied.

COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```java
public java.lang.Number getWarningThreshold();
```

- *Type:* java.lang.Number

The value at which the alert enters the WARNING state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}

---

### CloudwatchAlertRuleTelemetryRuleEvaluation <a name="CloudwatchAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleEvaluation;

CloudwatchAlertRuleTelemetryRuleEvaluation.builder()
    .intervalSeconds(java.lang.Number)
//  .pendingDurationSeconds(java.lang.Number)
//  .recoveryDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>java.lang.Number</code> | How long a threshold breach must last before the alert changes state, in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>java.lang.Number</code> | How long the result must stay within its thresholds before the alert returns to OK, in seconds. |

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}

---

##### `pendingDurationSeconds`<sup>Optional</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```java
public java.lang.Number getPendingDurationSeconds();
```

- *Type:* java.lang.Number

How long a threshold breach must last before the alert changes state, in seconds.

Must be a multiple of IntervalSeconds. 0 changes state immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}

---

##### `recoveryDurationSeconds`<sup>Optional</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```java
public java.lang.Number getRecoveryDurationSeconds();
```

- *Type:* java.lang.Number

How long the result must stay within its thresholds before the alert returns to OK, in seconds.

Must be a multiple of IntervalSeconds. 0 returns to OK immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}

---

### CloudwatchAlertRuleTelemetryRuleNoData <a name="CloudwatchAlertRuleTelemetryRuleNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleNoData;

CloudwatchAlertRuleTelemetryRuleNoData.builder()
//  .treatAs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs">treatAs</a></code> | <code>java.lang.String</code> | The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA. |

---

##### `treatAs`<sup>Optional</sup> <a name="treatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```java
public java.lang.String getTreatAs();
```

- *Type:* java.lang.String

The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}

---

### CloudwatchAlertRuleTelemetryRuleQuery <a name="CloudwatchAlertRuleTelemetryRuleQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleQuery;

CloudwatchAlertRuleTelemetryRuleQuery.builder()
    .expression(java.lang.String)
    .language(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression">expression</a></code> | <code>java.lang.String</code> | The query expression. For PromQL, the series value is returned in a field named value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language">language</a></code> | <code>java.lang.String</code> | The query language. Valid values: SQL, PROMQL. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The query expression. For PromQL, the series value is returned in a field named value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The query language. Valid values: SQL, PROMQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}

---

### CloudwatchAlertTags <a name="CloudwatchAlertTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertTags;

CloudwatchAlertTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#key CloudwatchAlert#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#value CloudwatchAlert#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlertNotificationRulesList <a name="CloudwatchAlertNotificationRulesList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesList;

new CloudwatchAlertNotificationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get"></a>

```java
public CloudwatchAlertNotificationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertNotificationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>>

---


### CloudwatchAlertNotificationRulesOutputReference <a name="CloudwatchAlertNotificationRulesOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesOutputReference;

new CloudwatchAlertNotificationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget"></a>

```java
public void putTarget(CloudwatchAlertNotificationRulesTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger"></a>

```java
public void putTrigger(CloudwatchAlertNotificationRulesTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger"></a>

```java
public void resetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput">targetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput">triggerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target"></a>

```java
public CloudwatchAlertNotificationRulesTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger"></a>

```java
public CloudwatchAlertNotificationRulesTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput"></a>

```java
public IResolvable|CloudwatchAlertNotificationRulesTarget getTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput"></a>

```java
public IResolvable|CloudwatchAlertNotificationRulesTrigger getTriggerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertNotificationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>

---


### CloudwatchAlertNotificationRulesTargetOutputReference <a name="CloudwatchAlertNotificationRulesTargetOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesTargetOutputReference;

new CloudwatchAlertNotificationRulesTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertNotificationRulesTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---


### CloudwatchAlertNotificationRulesTriggerOutputReference <a name="CloudwatchAlertNotificationRulesTriggerOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertNotificationRulesTriggerOutputReference;

new CloudwatchAlertNotificationRulesTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues">resetStateValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStateValues` <a name="resetStateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues"></a>

```java
public void resetStateValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput">stateValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues">stateValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stateValuesInput`<sup>Optional</sup> <a name="stateValuesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput"></a>

```java
public java.util.List<java.lang.String> getStateValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateValues`<sup>Required</sup> <a name="stateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues"></a>

```java
public java.util.List<java.lang.String> getStateValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertNotificationRulesTrigger getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---


### CloudwatchAlertRuleOutputReference <a name="CloudwatchAlertRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleOutputReference;

new CloudwatchAlertRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule">putTelemetryRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryRule` <a name="putTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule"></a>

```java
public void putTelemetryRule(CloudwatchAlertRuleTelemetryRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput">telemetryRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule"></a>

```java
public CloudwatchAlertRuleTelemetryRuleOutputReference getTelemetryRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a>

---

##### `telemetryRuleInput`<sup>Optional</sup> <a name="telemetryRuleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRule getTelemetryRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---


### CloudwatchAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference;

new CloudwatchAlertRuleTelemetryRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">resetCriticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">resetThresholdField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode">resetThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator"></a>

```java
public void resetComparator()
```

##### `resetCriticalThreshold` <a name="resetCriticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```java
public void resetCriticalThreshold()
```

##### `resetThresholdField` <a name="resetThresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```java
public void resetThresholdField()
```

##### `resetThresholdMode` <a name="resetThresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode"></a>

```java
public void resetThresholdMode()
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```java
public void resetWarningThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">criticalThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">thresholdFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">thresholdModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">warningThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">criticalThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">thresholdField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">thresholdMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```java
public java.lang.String getComparatorInput();
```

- *Type:* java.lang.String

---

##### `criticalThresholdInput`<sup>Optional</sup> <a name="criticalThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```java
public java.lang.Number getCriticalThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdFieldInput`<sup>Optional</sup> <a name="thresholdFieldInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```java
public java.lang.String getThresholdFieldInput();
```

- *Type:* java.lang.String

---

##### `thresholdModeInput`<sup>Optional</sup> <a name="thresholdModeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```java
public java.lang.String getThresholdModeInput();
```

- *Type:* java.lang.String

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```java
public java.lang.Number getWarningThresholdInput();
```

- *Type:* java.lang.Number

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```java
public java.lang.String getComparator();
```

- *Type:* java.lang.String

---

##### `criticalThreshold`<sup>Required</sup> <a name="criticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```java
public java.lang.Number getCriticalThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdField`<sup>Required</sup> <a name="thresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```java
public java.lang.String getThresholdField();
```

- *Type:* java.lang.String

---

##### `thresholdMode`<sup>Required</sup> <a name="thresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```java
public java.lang.String getThresholdMode();
```

- *Type:* java.lang.String

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```java
public java.lang.Number getWarningThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference;

new CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">resetPendingDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">resetRecoveryDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingDurationSeconds` <a name="resetPendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```java
public void resetPendingDurationSeconds()
```

##### `resetRecoveryDurationSeconds` <a name="resetRecoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```java
public void resetRecoveryDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">pendingDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">recoveryDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pendingDurationSecondsInput`<sup>Optional</sup> <a name="pendingDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```java
public java.lang.Number getPendingDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `recoveryDurationSecondsInput`<sup>Optional</sup> <a name="recoveryDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```java
public java.lang.Number getRecoveryDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `pendingDurationSeconds`<sup>Required</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```java
public java.lang.Number getPendingDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `recoveryDurationSeconds`<sup>Required</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```java
public java.lang.Number getRecoveryDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleEvaluation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference;

new CloudwatchAlertRuleTelemetryRuleNoDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs">resetTreatAs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTreatAs` <a name="resetTreatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs"></a>

```java
public void resetTreatAs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">treatAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treatAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `treatAsInput`<sup>Optional</sup> <a name="treatAsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```java
public java.lang.String getTreatAsInput();
```

- *Type:* java.lang.String

---

##### `treatAs`<sup>Required</sup> <a name="treatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```java
public java.lang.String getTreatAs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleNoData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchAlertRuleTelemetryRuleOutputReference <a name="CloudwatchAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleOutputReference;

new CloudwatchAlertRuleTelemetryRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation">putEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData">putNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData">resetNoData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```java
public void putCondition(CloudwatchAlertRuleTelemetryRuleCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `putEvaluation` <a name="putEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```java
public void putEvaluation(CloudwatchAlertRuleTelemetryRuleEvaluation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `putNoData` <a name="putNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```java
public void putNoData(CloudwatchAlertRuleTelemetryRuleNoData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `putQuery` <a name="putQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```java
public void putQuery(CloudwatchAlertRuleTelemetryRuleQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `resetNoData` <a name="resetNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```java
public void resetNoData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput">noDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput">queryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```java
public CloudwatchAlertRuleTelemetryRuleConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```java
public CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference getEvaluation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a>

---

##### `noData`<sup>Required</sup> <a name="noData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```java
public CloudwatchAlertRuleTelemetryRuleNoDataOutputReference getNoData();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query"></a>

```java
public CloudwatchAlertRuleTelemetryRuleQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleEvaluation getEvaluationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `noDataInput`<sup>Optional</sup> <a name="noDataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleNoData getNoDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleQuery getQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


### CloudwatchAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference;

new CloudwatchAlertRuleTelemetryRuleQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertRuleTelemetryRuleQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---


### CloudwatchAlertTagsList <a name="CloudwatchAlertTagsList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertTagsList;

new CloudwatchAlertTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get"></a>

```java
public CloudwatchAlertTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlertTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>>

---


### CloudwatchAlertTagsOutputReference <a name="CloudwatchAlertTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alert.CloudwatchAlertTagsOutputReference;

new CloudwatchAlertTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlertTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>

---



