# `apigatewayUsagePlan` Submodule <a name="`apigatewayUsagePlan` Submodule" id="@cdktn/provider-awscc.apigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlan <a name="ApigatewayUsagePlan" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .apiStages(IResolvable|java.util.List<ApigatewayUsagePlanApiStages>)
//  .description(java.lang.String)
//  .quota(ApigatewayUsagePlanQuota)
//  .tags(IResolvable|java.util.List<ApigatewayUsagePlanTags>)
//  .throttle(ApigatewayUsagePlanThrottle)
//  .usagePlanName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.apiStages">apiStages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.usagePlanName">usagePlanName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.apiStages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.throttle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}

---

##### `usagePlanName`<sup>Optional</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.usagePlanName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages">putApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages">resetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle">resetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName">resetUsagePlanName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiStages` <a name="putApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages"></a>

```java
public void putApiStages(IResolvable|java.util.List<ApigatewayUsagePlanApiStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>>

---

##### `putQuota` <a name="putQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota"></a>

```java
public void putQuota(ApigatewayUsagePlanQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApigatewayUsagePlanTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>>

---

##### `putThrottle` <a name="putThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle"></a>

```java
public void putThrottle(ApigatewayUsagePlanThrottle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `resetApiStages` <a name="resetApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages"></a>

```java
public void resetApiStages()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetQuota` <a name="resetQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetThrottle` <a name="resetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle"></a>

```java
public void resetThrottle()
```

##### `resetUsagePlanName` <a name="resetUsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName"></a>

```java
public void resetUsagePlanName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId">usagePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput">apiStagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput">quotaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput">throttleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput">usagePlanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName">usagePlanName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages"></a>

```java
public ApigatewayUsagePlanApiStagesList getApiStages();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota"></a>

```java
public ApigatewayUsagePlanQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags"></a>

```java
public ApigatewayUsagePlanTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a>

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle"></a>

```java
public ApigatewayUsagePlanThrottleOutputReference getThrottle();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a>

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId"></a>

```java
public java.lang.String getUsagePlanId();
```

- *Type:* java.lang.String

---

##### `apiStagesInput`<sup>Optional</sup> <a name="apiStagesInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanApiStages> getApiStagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput"></a>

```java
public IResolvable|ApigatewayUsagePlanQuota getQuotaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>>

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput"></a>

```java
public IResolvable|ApigatewayUsagePlanThrottle getThrottleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `usagePlanNameInput`<sup>Optional</sup> <a name="usagePlanNameInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput"></a>

```java
public java.lang.String getUsagePlanNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `usagePlanName`<sup>Required</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName"></a>

```java
public java.lang.String getUsagePlanName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanApiStages <a name="ApigatewayUsagePlanApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStages;

ApigatewayUsagePlanApiStages.builder()
//  .apiId(java.lang.String)
//  .stage(java.lang.String)
//  .throttle(IResolvable|java.util.Map<java.lang.String, ApigatewayUsagePlanApiStagesThrottle>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}. |

---

##### `apiId`<sup>Optional</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle"></a>

```java
public IResolvable|java.util.Map<java.lang.String, ApigatewayUsagePlanApiStagesThrottle> getThrottle();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}.

---

### ApigatewayUsagePlanApiStagesThrottle <a name="ApigatewayUsagePlanApiStagesThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStagesThrottle;

ApigatewayUsagePlanApiStagesThrottle.builder()
//  .burstLimit(java.lang.Number)
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

### ApigatewayUsagePlanConfig <a name="ApigatewayUsagePlanConfig" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanConfig;

ApigatewayUsagePlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .apiStages(IResolvable|java.util.List<ApigatewayUsagePlanApiStages>)
//  .description(java.lang.String)
//  .quota(ApigatewayUsagePlanQuota)
//  .tags(IResolvable|java.util.List<ApigatewayUsagePlanTags>)
//  .throttle(ApigatewayUsagePlanThrottle)
//  .usagePlanName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages">apiStages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName">usagePlanName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanApiStages> getApiStages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota"></a>

```java
public ApigatewayUsagePlanQuota getQuota();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle"></a>

```java
public ApigatewayUsagePlanThrottle getThrottle();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}

---

##### `usagePlanName`<sup>Optional</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName"></a>

```java
public java.lang.String getUsagePlanName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}.

---

### ApigatewayUsagePlanQuota <a name="ApigatewayUsagePlanQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanQuota;

ApigatewayUsagePlanQuota.builder()
//  .limit(java.lang.Number)
//  .offset(java.lang.Number)
//  .period(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset">offset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}.

---

### ApigatewayUsagePlanTags <a name="ApigatewayUsagePlanTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanTags;

ApigatewayUsagePlanTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key">key</a></code> | <code>java.lang.String</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#key ApigatewayUsagePlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}

---

### ApigatewayUsagePlanThrottle <a name="ApigatewayUsagePlanThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanThrottle;

ApigatewayUsagePlanThrottle.builder()
//  .burstLimit(java.lang.Number)
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayUsagePlanApiStagesList <a name="ApigatewayUsagePlanApiStagesList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStagesList;

new ApigatewayUsagePlanApiStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get"></a>

```java
public ApigatewayUsagePlanApiStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanApiStages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>>

---


### ApigatewayUsagePlanApiStagesOutputReference <a name="ApigatewayUsagePlanApiStagesOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStagesOutputReference;

new ApigatewayUsagePlanApiStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId">resetApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle">resetThrottle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThrottle` <a name="putThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```java
public void putThrottle(IResolvable|java.util.Map<java.lang.String, ApigatewayUsagePlanApiStagesThrottle> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---

##### `resetApiId` <a name="resetApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId"></a>

```java
public void resetApiId()
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage"></a>

```java
public void resetStage()
```

##### `resetThrottle` <a name="resetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```java
public void resetThrottle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```java
public ApigatewayUsagePlanApiStagesThrottleMap getThrottle();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, ApigatewayUsagePlanApiStagesThrottle> getThrottleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayUsagePlanApiStages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>

---


### ApigatewayUsagePlanApiStagesThrottleMap <a name="ApigatewayUsagePlanApiStagesThrottleMap" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStagesThrottleMap;

new ApigatewayUsagePlanApiStagesThrottleMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get"></a>

```java
public ApigatewayUsagePlanApiStagesThrottleOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, ApigatewayUsagePlanApiStagesThrottle> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---


### ApigatewayUsagePlanApiStagesThrottleOutputReference <a name="ApigatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanApiStagesThrottleOutputReference;

new ApigatewayUsagePlanApiStagesThrottleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```java
public void resetBurstLimit()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```java
public java.lang.Number getBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayUsagePlanApiStagesThrottle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>

---


### ApigatewayUsagePlanQuotaOutputReference <a name="ApigatewayUsagePlanQuotaOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanQuotaOutputReference;

new ApigatewayUsagePlanQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset"></a>

```java
public void resetOffset()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayUsagePlanQuota getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---


### ApigatewayUsagePlanTagsList <a name="ApigatewayUsagePlanTagsList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanTagsList;

new ApigatewayUsagePlanTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get"></a>

```java
public ApigatewayUsagePlanTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayUsagePlanTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>>

---


### ApigatewayUsagePlanTagsOutputReference <a name="ApigatewayUsagePlanTagsOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanTagsOutputReference;

new ApigatewayUsagePlanTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayUsagePlanTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>

---


### ApigatewayUsagePlanThrottleOutputReference <a name="ApigatewayUsagePlanThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_usage_plan.ApigatewayUsagePlanThrottleOutputReference;

new ApigatewayUsagePlanThrottleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit"></a>

```java
public void resetBurstLimit()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput"></a>

```java
public java.lang.Number getBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayUsagePlanThrottle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---



