# `personalizeRecommender` Submodule <a name="`personalizeRecommender` Submodule" id="@cdktn/provider-awscc.personalizeRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeRecommender <a name="PersonalizeRecommender" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender awscc_personalize_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommender;

PersonalizeRecommender.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .name(java.lang.String)
    .recipeArn(java.lang.String)
//  .recommenderConfig(PersonalizeRecommenderRecommenderConfig)
//  .tags(IResolvable|java.util.List<PersonalizeRecommenderTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the Domain dataset group that the recommender is created for. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recipeArn">recipeArn</a></code> | <code>java.lang.String</code> | The ARN of the recipe (Domain dataset group use case) that the recommender uses. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | The configuration details of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>></code> | Tags to associate with the recommender. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.datasetGroupArn"></a>

- *Type:* java.lang.String

The ARN of the Domain dataset group that the recommender is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#dataset_group_arn PersonalizeRecommender#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#name PersonalizeRecommender#name}

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recipeArn"></a>

- *Type:* java.lang.String

The ARN of the recipe (Domain dataset group use case) that the recommender uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recipe_arn PersonalizeRecommender#recipe_arn}

---

##### `recommenderConfig`<sup>Optional</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recommenderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

The configuration details of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recommender_config PersonalizeRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>>

Tags to associate with the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#tags PersonalizeRecommender#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig">putRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig">resetRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecommenderConfig` <a name="putRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig"></a>

```java
public void putRecommenderConfig(PersonalizeRecommenderRecommenderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<PersonalizeRecommenderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>>

---

##### `resetRecommenderConfig` <a name="resetRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig"></a>

```java
public void resetRecommenderConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommender;

PersonalizeRecommender.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommender;

PersonalizeRecommender.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommender;

PersonalizeRecommender.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommender;

PersonalizeRecommender.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PersonalizeRecommender.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PersonalizeRecommender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PersonalizeRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime">creationDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn">recommenderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput">recipeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput">recommenderConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn">recipeArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime"></a>

```java
public java.lang.String getCreationDateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime"></a>

```java
public java.lang.String getLastUpdatedDateTime();
```

- *Type:* java.lang.String

---

##### `recommenderArn`<sup>Required</sup> <a name="recommenderArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn"></a>

```java
public java.lang.String getRecommenderArn();
```

- *Type:* java.lang.String

---

##### `recommenderConfig`<sup>Required</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig"></a>

```java
public PersonalizeRecommenderRecommenderConfigOutputReference getRecommenderConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags"></a>

```java
public PersonalizeRecommenderTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a>

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput"></a>

```java
public java.lang.String getDatasetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recipeArnInput`<sup>Optional</sup> <a name="recipeArnInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput"></a>

```java
public java.lang.String getRecipeArnInput();
```

- *Type:* java.lang.String

---

##### `recommenderConfigInput`<sup>Optional</sup> <a name="recommenderConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput"></a>

```java
public IResolvable|PersonalizeRecommenderRecommenderConfig getRecommenderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput"></a>

```java
public IResolvable|java.util.List<PersonalizeRecommenderTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn"></a>

```java
public java.lang.String getRecipeArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeRecommenderConfig <a name="PersonalizeRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderConfig;

PersonalizeRecommenderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetGroupArn(java.lang.String)
    .name(java.lang.String)
    .recipeArn(java.lang.String)
//  .recommenderConfig(PersonalizeRecommenderRecommenderConfig)
//  .tags(IResolvable|java.util.List<PersonalizeRecommenderTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>java.lang.String</code> | The ARN of the Domain dataset group that the recommender is created for. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn">recipeArn</a></code> | <code>java.lang.String</code> | The ARN of the recipe (Domain dataset group use case) that the recommender uses. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | The configuration details of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>></code> | Tags to associate with the recommender. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn"></a>

```java
public java.lang.String getDatasetGroupArn();
```

- *Type:* java.lang.String

The ARN of the Domain dataset group that the recommender is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#dataset_group_arn PersonalizeRecommender#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#name PersonalizeRecommender#name}

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn"></a>

```java
public java.lang.String getRecipeArn();
```

- *Type:* java.lang.String

The ARN of the recipe (Domain dataset group use case) that the recommender uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recipe_arn PersonalizeRecommender#recipe_arn}

---

##### `recommenderConfig`<sup>Optional</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig"></a>

```java
public PersonalizeRecommenderRecommenderConfig getRecommenderConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

The configuration details of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recommender_config PersonalizeRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags"></a>

```java
public IResolvable|java.util.List<PersonalizeRecommenderTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>>

Tags to associate with the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#tags PersonalizeRecommender#tags}

---

### PersonalizeRecommenderRecommenderConfig <a name="PersonalizeRecommenderRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderRecommenderConfig;

PersonalizeRecommenderRecommenderConfig.builder()
//  .enableMetadataWithRecommendations(java.lang.Boolean|IResolvable)
//  .itemExplorationConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .minRecommendationRequestsPerSecond(java.lang.Number)
//  .trainingDataConfig(PersonalizeRecommenderRecommenderConfigTrainingDataConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond">minRecommendationRequestsPerSecond</a></code> | <code>java.lang.Number</code> | Specifies the requested minimum provisioned recommendation requests per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig">trainingDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | The training data configuration to use when creating a domain recommender. |

---

##### `enableMetadataWithRecommendations`<sup>Optional</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether metadata with recommendations is enabled for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#enable_metadata_with_recommendations PersonalizeRecommender#enable_metadata_with_recommendations}

---

##### `itemExplorationConfig`<sup>Optional</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#item_exploration_config PersonalizeRecommender#item_exploration_config}

---

##### `minRecommendationRequestsPerSecond`<sup>Optional</sup> <a name="minRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond"></a>

```java
public java.lang.Number getMinRecommendationRequestsPerSecond();
```

- *Type:* java.lang.Number

Specifies the requested minimum provisioned recommendation requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#min_recommendation_requests_per_second PersonalizeRecommender#min_recommendation_requests_per_second}

---

##### `trainingDataConfig`<sup>Optional</sup> <a name="trainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig"></a>

```java
public PersonalizeRecommenderRecommenderConfigTrainingDataConfig getTrainingDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

The training data configuration to use when creating a domain recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#training_data_config PersonalizeRecommender#training_data_config}

---

### PersonalizeRecommenderRecommenderConfigTrainingDataConfig <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig;

PersonalizeRecommenderRecommenderConfigTrainingDataConfig.builder()
//  .excludedDatasetColumns(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns">excludedDatasetColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Specifies the columns to exclude from training. |

---

##### `excludedDatasetColumns`<sup>Optional</sup> <a name="excludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getExcludedDatasetColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Specifies the columns to exclude from training.

Each key is a dataset type, and each value is a list of columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#excluded_dataset_columns PersonalizeRecommender#excluded_dataset_columns}

---

### PersonalizeRecommenderTags <a name="PersonalizeRecommenderTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderTags;

PersonalizeRecommenderTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#key PersonalizeRecommender#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#value PersonalizeRecommender#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeRecommenderRecommenderConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderRecommenderConfigOutputReference;

new PersonalizeRecommenderRecommenderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig">putTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations">resetEnableMetadataWithRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig">resetItemExplorationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond">resetMinRecommendationRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig">resetTrainingDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrainingDataConfig` <a name="putTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig"></a>

```java
public void putTrainingDataConfig(PersonalizeRecommenderRecommenderConfigTrainingDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---

##### `resetEnableMetadataWithRecommendations` <a name="resetEnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```java
public void resetEnableMetadataWithRecommendations()
```

##### `resetItemExplorationConfig` <a name="resetItemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig"></a>

```java
public void resetItemExplorationConfig()
```

##### `resetMinRecommendationRequestsPerSecond` <a name="resetMinRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond"></a>

```java
public void resetMinRecommendationRequestsPerSecond()
```

##### `resetTrainingDataConfig` <a name="resetTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig"></a>

```java
public void resetTrainingDataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig">trainingDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput">enableMetadataWithRecommendationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput">itemExplorationConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput">minRecommendationRequestsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput">trainingDataConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond">minRecommendationRequestsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trainingDataConfig`<sup>Required</sup> <a name="trainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig"></a>

```java
public PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference getTrainingDataConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a>

---

##### `enableMetadataWithRecommendationsInput`<sup>Optional</sup> <a name="enableMetadataWithRecommendationsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `itemExplorationConfigInput`<sup>Optional</sup> <a name="itemExplorationConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `minRecommendationRequestsPerSecondInput`<sup>Optional</sup> <a name="minRecommendationRequestsPerSecondInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput"></a>

```java
public java.lang.Number getMinRecommendationRequestsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `trainingDataConfigInput`<sup>Optional</sup> <a name="trainingDataConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput"></a>

```java
public IResolvable|PersonalizeRecommenderRecommenderConfigTrainingDataConfig getTrainingDataConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---

##### `enableMetadataWithRecommendations`<sup>Required</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `itemExplorationConfig`<sup>Required</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `minRecommendationRequestsPerSecond`<sup>Required</sup> <a name="minRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond"></a>

```java
public java.lang.Number getMinRecommendationRequestsPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeRecommenderRecommenderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---


### PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference;

new PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns">resetExcludedDatasetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDatasetColumns` <a name="resetExcludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns"></a>

```java
public void resetExcludedDatasetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput">excludedDatasetColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns">excludedDatasetColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedDatasetColumnsInput`<sup>Optional</sup> <a name="excludedDatasetColumnsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getExcludedDatasetColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `excludedDatasetColumns`<sup>Required</sup> <a name="excludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getExcludedDatasetColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeRecommenderRecommenderConfigTrainingDataConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---


### PersonalizeRecommenderTagsList <a name="PersonalizeRecommenderTagsList" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderTagsList;

new PersonalizeRecommenderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get"></a>

```java
public PersonalizeRecommenderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PersonalizeRecommenderTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>>

---


### PersonalizeRecommenderTagsOutputReference <a name="PersonalizeRecommenderTagsOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_recommender.PersonalizeRecommenderTagsOutputReference;

new PersonalizeRecommenderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeRecommenderTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>

---



