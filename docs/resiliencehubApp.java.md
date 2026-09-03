# `resiliencehubApp` Submodule <a name="`resiliencehubApp` Submodule" id="@cdktn/provider-awscc.resiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubApp <a name="ResiliencehubApp" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubApp;

ResiliencehubApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appTemplateBody(java.lang.String)
    .name(java.lang.String)
    .resourceMappings(IResolvable|java.util.List<ResiliencehubAppResourceMappings>)
//  .appAssessmentSchedule(java.lang.String)
//  .description(java.lang.String)
//  .eventSubscriptions(IResolvable|java.util.List<ResiliencehubAppEventSubscriptions>)
//  .permissionModel(ResiliencehubAppPermissionModel)
//  .resiliencyPolicyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appTemplateBody">appTemplateBody</a></code> | <code>java.lang.String</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resourceMappings">resourceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>></code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>java.lang.String</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.eventSubscriptions">eventSubscriptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>></code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appTemplateBody"></a>

- *Type:* java.lang.String

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resourceMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>>

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `appAssessmentSchedule`<sup>Optional</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appAssessmentSchedule"></a>

- *Type:* java.lang.String

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.description"></a>

- *Type:* java.lang.String

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `eventSubscriptions`<sup>Optional</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.eventSubscriptions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>>

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.permissionModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `resiliencyPolicyArn`<sup>Optional</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resiliencyPolicyArn"></a>

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions">putEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel">putPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings">putResourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule">resetAppAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions">resetEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn">resetResiliencyPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventSubscriptions` <a name="putEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions"></a>

```java
public void putEventSubscriptions(IResolvable|java.util.List<ResiliencehubAppEventSubscriptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>>

---

##### `putPermissionModel` <a name="putPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel"></a>

```java
public void putPermissionModel(ResiliencehubAppPermissionModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `putResourceMappings` <a name="putResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings"></a>

```java
public void putResourceMappings(IResolvable|java.util.List<ResiliencehubAppResourceMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>>

---

##### `resetAppAssessmentSchedule` <a name="resetAppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule"></a>

```java
public void resetAppAssessmentSchedule()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEventSubscriptions` <a name="resetEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions"></a>

```java
public void resetEventSubscriptions()
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel"></a>

```java
public void resetPermissionModel()
```

##### `resetResiliencyPolicyArn` <a name="resetResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn"></a>

```java
public void resetResiliencyPolicyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubApp;

ResiliencehubApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubApp;

ResiliencehubApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubApp;

ResiliencehubApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubApp;

ResiliencehubApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResiliencehubApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResiliencehubApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn">appArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus">driftStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions">eventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings">resourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput">appAssessmentScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput">appTemplateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput">eventSubscriptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput">permissionModelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput">resiliencyPolicyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput">resourceMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody">appTemplateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appArn`<sup>Required</sup> <a name="appArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn"></a>

```java
public java.lang.String getAppArn();
```

- *Type:* java.lang.String

---

##### `driftStatus`<sup>Required</sup> <a name="driftStatus" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus"></a>

```java
public java.lang.String getDriftStatus();
```

- *Type:* java.lang.String

---

##### `eventSubscriptions`<sup>Required</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions"></a>

```java
public ResiliencehubAppEventSubscriptionsList getEventSubscriptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel"></a>

```java
public ResiliencehubAppPermissionModelOutputReference getPermissionModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a>

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings"></a>

```java
public ResiliencehubAppResourceMappingsList getResourceMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a>

---

##### `appAssessmentScheduleInput`<sup>Optional</sup> <a name="appAssessmentScheduleInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput"></a>

```java
public java.lang.String getAppAssessmentScheduleInput();
```

- *Type:* java.lang.String

---

##### `appTemplateBodyInput`<sup>Optional</sup> <a name="appTemplateBodyInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput"></a>

```java
public java.lang.String getAppTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventSubscriptionsInput`<sup>Optional</sup> <a name="eventSubscriptionsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppEventSubscriptions> getEventSubscriptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput"></a>

```java
public IResolvable|ResiliencehubAppPermissionModel getPermissionModelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `resiliencyPolicyArnInput`<sup>Optional</sup> <a name="resiliencyPolicyArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput"></a>

```java
public java.lang.String getResiliencyPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `resourceMappingsInput`<sup>Optional</sup> <a name="resourceMappingsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppResourceMappings> getResourceMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `appAssessmentSchedule`<sup>Required</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule"></a>

```java
public java.lang.String getAppAssessmentSchedule();
```

- *Type:* java.lang.String

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody"></a>

```java
public java.lang.String getAppTemplateBody();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resiliencyPolicyArn`<sup>Required</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn"></a>

```java
public java.lang.String getResiliencyPolicyArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppConfig <a name="ResiliencehubAppConfig" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppConfig;

ResiliencehubAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appTemplateBody(java.lang.String)
    .name(java.lang.String)
    .resourceMappings(IResolvable|java.util.List<ResiliencehubAppResourceMappings>)
//  .appAssessmentSchedule(java.lang.String)
//  .description(java.lang.String)
//  .eventSubscriptions(IResolvable|java.util.List<ResiliencehubAppEventSubscriptions>)
//  .permissionModel(ResiliencehubAppPermissionModel)
//  .resiliencyPolicyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody">appTemplateBody</a></code> | <code>java.lang.String</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings">resourceMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>></code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>java.lang.String</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description">description</a></code> | <code>java.lang.String</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions">eventSubscriptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>></code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody"></a>

```java
public java.lang.String getAppTemplateBody();
```

- *Type:* java.lang.String

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppResourceMappings> getResourceMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>>

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `appAssessmentSchedule`<sup>Optional</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule"></a>

```java
public java.lang.String getAppAssessmentSchedule();
```

- *Type:* java.lang.String

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `eventSubscriptions`<sup>Optional</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppEventSubscriptions> getEventSubscriptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>>

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel"></a>

```java
public ResiliencehubAppPermissionModel getPermissionModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `resiliencyPolicyArn`<sup>Optional</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn"></a>

```java
public java.lang.String getResiliencyPolicyArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

### ResiliencehubAppEventSubscriptions <a name="ResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppEventSubscriptions;

ResiliencehubAppEventSubscriptions.builder()
//  .eventType(java.lang.String)
//  .name(java.lang.String)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of event you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name">name</a></code> | <code>java.lang.String</code> | Unique name to identify an event subscription. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. |

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

The type of event you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name to identify an event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}

---

### ResiliencehubAppPermissionModel <a name="ResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppPermissionModel;

ResiliencehubAppPermissionModel.builder()
//  .crossAccountRoleArns(java.util.List<java.lang.String>)
//  .invokerRoleName(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName">invokerRoleName</a></code> | <code>java.lang.String</code> | Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type">type</a></code> | <code>java.lang.String</code> | Defines how AWS Resilience Hub scans your resources. |

---

##### `crossAccountRoleArns`<sup>Optional</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns"></a>

```java
public java.util.List<java.lang.String> getCrossAccountRoleArns();
```

- *Type:* java.util.List<java.lang.String>

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

##### `invokerRoleName`<sup>Optional</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName"></a>

```java
public java.lang.String getInvokerRoleName();
```

- *Type:* java.lang.String

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

### ResiliencehubAppResourceMappings <a name="ResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppResourceMappings;

ResiliencehubAppResourceMappings.builder()
    .mappingType(java.lang.String)
    .physicalResourceId(ResiliencehubAppResourceMappingsPhysicalResourceId)
//  .eksSourceName(java.lang.String)
//  .logicalStackName(java.lang.String)
//  .resourceName(java.lang.String)
//  .terraformSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType">mappingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId">physicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName">eksSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName">logicalStackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName">terraformSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}. |

---

##### `mappingType`<sup>Required</sup> <a name="mappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType"></a>

```java
public java.lang.String getMappingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}.

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId"></a>

```java
public ResiliencehubAppResourceMappingsPhysicalResourceId getPhysicalResourceId();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}.

---

##### `eksSourceName`<sup>Optional</sup> <a name="eksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName"></a>

```java
public java.lang.String getEksSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}.

---

##### `logicalStackName`<sup>Optional</sup> <a name="logicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName"></a>

```java
public java.lang.String getLogicalStackName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}.

---

##### `terraformSourceName`<sup>Optional</sup> <a name="terraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName"></a>

```java
public java.lang.String getTerraformSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}.

---

### ResiliencehubAppResourceMappingsPhysicalResourceId <a name="ResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppResourceMappingsPhysicalResourceId;

ResiliencehubAppResourceMappingsPhysicalResourceId.builder()
    .identifier(java.lang.String)
    .type(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .awsRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubAppEventSubscriptionsList <a name="ResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppEventSubscriptionsList;

new ResiliencehubAppEventSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get"></a>

```java
public ResiliencehubAppEventSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppEventSubscriptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>>

---


### ResiliencehubAppEventSubscriptionsOutputReference <a name="ResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppEventSubscriptionsOutputReference;

new ResiliencehubAppEventSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventType` <a name="resetEventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType"></a>

```java
public void resetEventType()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubAppEventSubscriptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>

---


### ResiliencehubAppPermissionModelOutputReference <a name="ResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppPermissionModelOutputReference;

new ResiliencehubAppPermissionModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns">resetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName">resetInvokerRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrossAccountRoleArns` <a name="resetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```java
public void resetCrossAccountRoleArns()
```

##### `resetInvokerRoleName` <a name="resetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName"></a>

```java
public void resetInvokerRoleName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput">crossAccountRoleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput">invokerRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArnsInput`<sup>Optional</sup> <a name="crossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```java
public java.util.List<java.lang.String> getCrossAccountRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invokerRoleNameInput`<sup>Optional</sup> <a name="invokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput"></a>

```java
public java.lang.String getInvokerRoleNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArns`<sup>Required</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```java
public java.util.List<java.lang.String> getCrossAccountRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```java
public java.lang.String getInvokerRoleName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubAppPermissionModel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---


### ResiliencehubAppResourceMappingsList <a name="ResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppResourceMappingsList;

new ResiliencehubAppResourceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get"></a>

```java
public ResiliencehubAppResourceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResiliencehubAppResourceMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>>

---


### ResiliencehubAppResourceMappingsOutputReference <a name="ResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppResourceMappingsOutputReference;

new ResiliencehubAppResourceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId">putPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName">resetEksSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName">resetLogicalStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName">resetTerraformSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhysicalResourceId` <a name="putPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId"></a>

```java
public void putPhysicalResourceId(ResiliencehubAppResourceMappingsPhysicalResourceId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `resetEksSourceName` <a name="resetEksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName"></a>

```java
public void resetEksSourceName()
```

##### `resetLogicalStackName` <a name="resetLogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName"></a>

```java
public void resetLogicalStackName()
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName"></a>

```java
public void resetResourceName()
```

##### `resetTerraformSourceName` <a name="resetTerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName"></a>

```java
public void resetTerraformSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">physicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput">eksSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput">logicalStackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput">mappingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput">physicalResourceIdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput">terraformSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">eksSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">logicalStackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType">mappingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">terraformSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```java
public ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference getPhysicalResourceId();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `eksSourceNameInput`<sup>Optional</sup> <a name="eksSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput"></a>

```java
public java.lang.String getEksSourceNameInput();
```

- *Type:* java.lang.String

---

##### `logicalStackNameInput`<sup>Optional</sup> <a name="logicalStackNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput"></a>

```java
public java.lang.String getLogicalStackNameInput();
```

- *Type:* java.lang.String

---

##### `mappingTypeInput`<sup>Optional</sup> <a name="mappingTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput"></a>

```java
public java.lang.String getMappingTypeInput();
```

- *Type:* java.lang.String

---

##### `physicalResourceIdInput`<sup>Optional</sup> <a name="physicalResourceIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput"></a>

```java
public IResolvable|ResiliencehubAppResourceMappingsPhysicalResourceId getPhysicalResourceIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `terraformSourceNameInput`<sup>Optional</sup> <a name="terraformSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput"></a>

```java
public java.lang.String getTerraformSourceNameInput();
```

- *Type:* java.lang.String

---

##### `eksSourceName`<sup>Required</sup> <a name="eksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```java
public java.lang.String getEksSourceName();
```

- *Type:* java.lang.String

---

##### `logicalStackName`<sup>Required</sup> <a name="logicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```java
public java.lang.String getLogicalStackName();
```

- *Type:* java.lang.String

---

##### `mappingType`<sup>Required</sup> <a name="mappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```java
public java.lang.String getMappingType();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `terraformSourceName`<sup>Required</sup> <a name="terraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```java
public java.lang.String getTerraformSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubAppResourceMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>

---


### ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_app.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference;

new ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubAppResourceMappingsPhysicalResourceId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---



