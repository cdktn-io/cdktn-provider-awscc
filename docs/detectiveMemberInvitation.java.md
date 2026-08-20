# `detectiveMemberInvitation` Submodule <a name="`detectiveMemberInvitation` Submodule" id="@cdktn/provider-awscc.detectiveMemberInvitation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMemberInvitation <a name="DetectiveMemberInvitation" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation awscc_detective_member_invitation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitation;

DetectiveMemberInvitation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .graphArn(java.lang.String)
    .memberEmailAddress(java.lang.String)
    .memberId(java.lang.String)
//  .disableEmailNotification(java.lang.Boolean|IResolvable)
//  .message(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.graphArn">graphArn</a></code> | <code>java.lang.String</code> | The ARN of the graph to which the member account will be invited. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.memberEmailAddress">memberEmailAddress</a></code> | <code>java.lang.String</code> | The root email address for the account to be invited, for validation. Updating this field has no effect. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.memberId">memberId</a></code> | <code>java.lang.String</code> | The AWS account ID to be invited to join the graph as a member. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.disableEmailNotification">disableEmailNotification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, invitation emails are not sent to the member accounts. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | A message to be included in the email invitation sent to the invited account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.graphArn"></a>

- *Type:* java.lang.String

The ARN of the graph to which the member account will be invited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#graph_arn DetectiveMemberInvitation#graph_arn}

---

##### `memberEmailAddress`<sup>Required</sup> <a name="memberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.memberEmailAddress"></a>

- *Type:* java.lang.String

The root email address for the account to be invited, for validation. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_email_address DetectiveMemberInvitation#member_email_address}

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.memberId"></a>

- *Type:* java.lang.String

The AWS account ID to be invited to join the graph as a member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_id DetectiveMemberInvitation#member_id}

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="disableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.disableEmailNotification"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, invitation emails are not sent to the member accounts.

Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#disable_email_notification DetectiveMemberInvitation#disable_email_notification}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.message"></a>

- *Type:* java.lang.String

A message to be included in the email invitation sent to the invited account.

Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#message DetectiveMemberInvitation#message}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification">resetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableEmailNotification` <a name="resetDisableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification"></a>

```java
public void resetDisableEmailNotification()
```

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage"></a>

```java
public void resetMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitation;

DetectiveMemberInvitation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitation;

DetectiveMemberInvitation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitation;

DetectiveMemberInvitation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitation;

DetectiveMemberInvitation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DetectiveMemberInvitation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DetectiveMemberInvitation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DetectiveMemberInvitation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DetectiveMemberInvitation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput">disableEmailNotificationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput">graphArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput">memberEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput">memberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification">disableEmailNotification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn">graphArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress">memberEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `disableEmailNotificationInput`<sup>Optional</sup> <a name="disableEmailNotificationInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableEmailNotificationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphArnInput`<sup>Optional</sup> <a name="graphArnInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput"></a>

```java
public java.lang.String getGraphArnInput();
```

- *Type:* java.lang.String

---

##### `memberEmailAddressInput`<sup>Optional</sup> <a name="memberEmailAddressInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput"></a>

```java
public java.lang.String getMemberEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput"></a>

```java
public java.lang.String getMemberIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `disableEmailNotification`<sup>Required</sup> <a name="disableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification"></a>

```java
public java.lang.Boolean|IResolvable getDisableEmailNotification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn"></a>

```java
public java.lang.String getGraphArn();
```

- *Type:* java.lang.String

---

##### `memberEmailAddress`<sup>Required</sup> <a name="memberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress"></a>

```java
public java.lang.String getMemberEmailAddress();
```

- *Type:* java.lang.String

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberInvitationConfig <a name="DetectiveMemberInvitationConfig" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.detective_member_invitation.DetectiveMemberInvitationConfig;

DetectiveMemberInvitationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .graphArn(java.lang.String)
    .memberEmailAddress(java.lang.String)
    .memberId(java.lang.String)
//  .disableEmailNotification(java.lang.Boolean|IResolvable)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn">graphArn</a></code> | <code>java.lang.String</code> | The ARN of the graph to which the member account will be invited. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress">memberEmailAddress</a></code> | <code>java.lang.String</code> | The root email address for the account to be invited, for validation. Updating this field has no effect. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId">memberId</a></code> | <code>java.lang.String</code> | The AWS account ID to be invited to join the graph as a member. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification">disableEmailNotification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, invitation emails are not sent to the member accounts. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message">message</a></code> | <code>java.lang.String</code> | A message to be included in the email invitation sent to the invited account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn"></a>

```java
public java.lang.String getGraphArn();
```

- *Type:* java.lang.String

The ARN of the graph to which the member account will be invited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#graph_arn DetectiveMemberInvitation#graph_arn}

---

##### `memberEmailAddress`<sup>Required</sup> <a name="memberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress"></a>

```java
public java.lang.String getMemberEmailAddress();
```

- *Type:* java.lang.String

The root email address for the account to be invited, for validation. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_email_address DetectiveMemberInvitation#member_email_address}

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

The AWS account ID to be invited to join the graph as a member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_id DetectiveMemberInvitation#member_id}

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="disableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification"></a>

```java
public java.lang.Boolean|IResolvable getDisableEmailNotification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, invitation emails are not sent to the member accounts.

Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#disable_email_notification DetectiveMemberInvitation#disable_email_notification}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

A message to be included in the email invitation sent to the invited account.

Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#message DetectiveMemberInvitation#message}

---



