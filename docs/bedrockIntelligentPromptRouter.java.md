# `bedrockIntelligentPromptRouter` Submodule <a name="`bedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockIntelligentPromptRouter <a name="BedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouter;

BedrockIntelligentPromptRouter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fallbackModel(BedrockIntelligentPromptRouterFallbackModel)
    .models(IResolvable|java.util.List<BedrockIntelligentPromptRouterModels>)
    .promptRouterName(java.lang.String)
    .routingCriteria(BedrockIntelligentPromptRouterRoutingCriteria)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockIntelligentPromptRouterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.models">models</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>></code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.promptRouterName">promptRouterName</a></code> | <code>java.lang.String</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>></code> | List of Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.fallbackModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.models"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>>

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.promptRouterName"></a>

- *Type:* java.lang.String

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.routingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>>

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel">putFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels">putModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria">putRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFallbackModel` <a name="putFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel"></a>

```java
public void putFallbackModel(BedrockIntelligentPromptRouterFallbackModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `putModels` <a name="putModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels"></a>

```java
public void putModels(IResolvable|java.util.List<BedrockIntelligentPromptRouterModels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>>

---

##### `putRoutingCriteria` <a name="putRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria"></a>

```java
public void putRoutingCriteria(BedrockIntelligentPromptRouterRoutingCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockIntelligentPromptRouterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouter;

BedrockIntelligentPromptRouter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouter;

BedrockIntelligentPromptRouter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouter;

BedrockIntelligentPromptRouter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouter;

BedrockIntelligentPromptRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockIntelligentPromptRouter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockIntelligentPromptRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn">promptRouterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput">fallbackModelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput">modelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput">promptRouterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput">routingCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName">promptRouterName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel"></a>

```java
public BedrockIntelligentPromptRouterFallbackModelOutputReference getFallbackModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models"></a>

```java
public BedrockIntelligentPromptRouterModelsList getModels();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a>

---

##### `promptRouterArn`<sup>Required</sup> <a name="promptRouterArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```java
public java.lang.String getPromptRouterArn();
```

- *Type:* java.lang.String

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria"></a>

```java
public BedrockIntelligentPromptRouterRoutingCriteriaOutputReference getRoutingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags"></a>

```java
public BedrockIntelligentPromptRouterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fallbackModelInput`<sup>Optional</sup> <a name="fallbackModelInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterFallbackModel getFallbackModelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `modelsInput`<sup>Optional</sup> <a name="modelsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterModels> getModelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>>

---

##### `promptRouterNameInput`<sup>Optional</sup> <a name="promptRouterNameInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput"></a>

```java
public java.lang.String getPromptRouterNameInput();
```

- *Type:* java.lang.String

---

##### `routingCriteriaInput`<sup>Optional</sup> <a name="routingCriteriaInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterRoutingCriteria getRoutingCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName"></a>

```java
public java.lang.String getPromptRouterName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockIntelligentPromptRouterConfig <a name="BedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterConfig;

BedrockIntelligentPromptRouterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fallbackModel(BedrockIntelligentPromptRouterFallbackModel)
    .models(IResolvable|java.util.List<BedrockIntelligentPromptRouterModels>)
    .promptRouterName(java.lang.String)
    .routingCriteria(BedrockIntelligentPromptRouterRoutingCriteria)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockIntelligentPromptRouterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel">fallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models">models</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>></code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName">promptRouterName</a></code> | <code>java.lang.String</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria">routingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>></code> | List of Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fallbackModel`<sup>Required</sup> <a name="fallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel"></a>

```java
public BedrockIntelligentPromptRouterFallbackModel getFallbackModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterModels> getModels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>>

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `promptRouterName`<sup>Required</sup> <a name="promptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName"></a>

```java
public java.lang.String getPromptRouterName();
```

- *Type:* java.lang.String

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `routingCriteria`<sup>Required</sup> <a name="routingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria"></a>

```java
public BedrockIntelligentPromptRouterRoutingCriteria getRoutingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>>

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

### BedrockIntelligentPromptRouterFallbackModel <a name="BedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterFallbackModel;

BedrockIntelligentPromptRouterFallbackModel.builder()
    .modelArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterModels <a name="BedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterModels;

BedrockIntelligentPromptRouterModels.builder()
    .modelArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterRoutingCriteria <a name="BedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterRoutingCriteria;

BedrockIntelligentPromptRouterRoutingCriteria.builder()
    .responseQualityDifference(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference">responseQualityDifference</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}. |

---

##### `responseQualityDifference`<sup>Required</sup> <a name="responseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference"></a>

```java
public java.lang.Number getResponseQualityDifference();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

### BedrockIntelligentPromptRouterTags <a name="BedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterTags;

BedrockIntelligentPromptRouterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#key BedrockIntelligentPromptRouter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_intelligent_prompt_router#value BedrockIntelligentPromptRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockIntelligentPromptRouterFallbackModelOutputReference <a name="BedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterFallbackModelOutputReference;

new BedrockIntelligentPromptRouterFallbackModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterFallbackModel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---


### BedrockIntelligentPromptRouterModelsList <a name="BedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterModelsList;

new BedrockIntelligentPromptRouterModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get"></a>

```java
public BedrockIntelligentPromptRouterModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterModels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>>

---


### BedrockIntelligentPromptRouterModelsOutputReference <a name="BedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterModelsOutputReference;

new BedrockIntelligentPromptRouterModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterModels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>

---


### BedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="BedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference;

new BedrockIntelligentPromptRouterRoutingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput">responseQualityDifferenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">responseQualityDifference</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responseQualityDifferenceInput`<sup>Optional</sup> <a name="responseQualityDifferenceInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput"></a>

```java
public java.lang.Number getResponseQualityDifferenceInput();
```

- *Type:* java.lang.Number

---

##### `responseQualityDifference`<sup>Required</sup> <a name="responseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```java
public java.lang.Number getResponseQualityDifference();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterRoutingCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---


### BedrockIntelligentPromptRouterTagsList <a name="BedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterTagsList;

new BedrockIntelligentPromptRouterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get"></a>

```java
public BedrockIntelligentPromptRouterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockIntelligentPromptRouterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>>

---


### BedrockIntelligentPromptRouterTagsOutputReference <a name="BedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_intelligent_prompt_router.BedrockIntelligentPromptRouterTagsOutputReference;

new BedrockIntelligentPromptRouterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockIntelligentPromptRouterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>

---



