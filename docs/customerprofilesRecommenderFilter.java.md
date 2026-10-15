# `customerprofilesRecommenderFilter` Submodule <a name="`customerprofilesRecommenderFilter` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommenderFilter <a name="CustomerprofilesRecommenderFilter" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilter;

CustomerprofilesRecommenderFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .recommenderFilterExpression(java.lang.String)
    .recommenderFilterName(java.lang.String)
//  .description(java.lang.String)
//  .recommenderSchemaName(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterExpression">recommenderFilterExpression</a></code> | <code>java.lang.String</code> | The filter expression that defines which items to include or exclude from recommendations. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterName">recommenderFilterName</a></code> | <code>java.lang.String</code> | The name of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderSchemaName">recommenderSchemaName</a></code> | <code>java.lang.String</code> | The name of the recommender schema to use for this recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}

---

##### `recommenderFilterExpression`<sup>Required</sup> <a name="recommenderFilterExpression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterExpression"></a>

- *Type:* java.lang.String

The filter expression that defines which items to include or exclude from recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterName"></a>

- *Type:* java.lang.String

The name of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}

---

##### `recommenderSchemaName`<sup>Optional</sup> <a name="recommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderSchemaName"></a>

- *Type:* java.lang.String

The name of the recommender schema to use for this recommender filter.

If not specified, the default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName">resetRecommenderSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRecommenderSchemaName` <a name="resetRecommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName"></a>

```java
public void resetRecommenderSchemaName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilter;

CustomerprofilesRecommenderFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilter;

CustomerprofilesRecommenderFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilter;

CustomerprofilesRecommenderFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilter;

CustomerprofilesRecommenderFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesRecommenderFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesRecommenderFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesRecommenderFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommenderFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn">recommenderFilterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput">recommenderFilterExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput">recommenderFilterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput">recommenderSchemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression">recommenderFilterExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName">recommenderFilterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName">recommenderSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recommenderFilterArn`<sup>Required</sup> <a name="recommenderFilterArn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn"></a>

```java
public java.lang.String getRecommenderFilterArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags"></a>

```java
public CustomerprofilesRecommenderFilterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `recommenderFilterExpressionInput`<sup>Optional</sup> <a name="recommenderFilterExpressionInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput"></a>

```java
public java.lang.String getRecommenderFilterExpressionInput();
```

- *Type:* java.lang.String

---

##### `recommenderFilterNameInput`<sup>Optional</sup> <a name="recommenderFilterNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput"></a>

```java
public java.lang.String getRecommenderFilterNameInput();
```

- *Type:* java.lang.String

---

##### `recommenderSchemaNameInput`<sup>Optional</sup> <a name="recommenderSchemaNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput"></a>

```java
public java.lang.String getRecommenderSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `recommenderFilterExpression`<sup>Required</sup> <a name="recommenderFilterExpression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression"></a>

```java
public java.lang.String getRecommenderFilterExpression();
```

- *Type:* java.lang.String

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName"></a>

```java
public java.lang.String getRecommenderFilterName();
```

- *Type:* java.lang.String

---

##### `recommenderSchemaName`<sup>Required</sup> <a name="recommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName"></a>

```java
public java.lang.String getRecommenderSchemaName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderFilterConfig <a name="CustomerprofilesRecommenderFilterConfig" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilterConfig;

CustomerprofilesRecommenderFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .recommenderFilterExpression(java.lang.String)
    .recommenderFilterName(java.lang.String)
//  .description(java.lang.String)
//  .recommenderSchemaName(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression">recommenderFilterExpression</a></code> | <code>java.lang.String</code> | The filter expression that defines which items to include or exclude from recommendations. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName">recommenderFilterName</a></code> | <code>java.lang.String</code> | The name of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName">recommenderSchemaName</a></code> | <code>java.lang.String</code> | The name of the recommender schema to use for this recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}

---

##### `recommenderFilterExpression`<sup>Required</sup> <a name="recommenderFilterExpression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression"></a>

```java
public java.lang.String getRecommenderFilterExpression();
```

- *Type:* java.lang.String

The filter expression that defines which items to include or exclude from recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName"></a>

```java
public java.lang.String getRecommenderFilterName();
```

- *Type:* java.lang.String

The name of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}

---

##### `recommenderSchemaName`<sup>Optional</sup> <a name="recommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName"></a>

```java
public java.lang.String getRecommenderSchemaName();
```

- *Type:* java.lang.String

The name of the recommender schema to use for this recommender filter.

If not specified, the default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}

---

### CustomerprofilesRecommenderFilterTags <a name="CustomerprofilesRecommenderFilterTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilterTags;

CustomerprofilesRecommenderFilterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderFilterTagsList <a name="CustomerprofilesRecommenderFilterTagsList" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilterTagsList;

new CustomerprofilesRecommenderFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get"></a>

```java
public CustomerprofilesRecommenderFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesRecommenderFilterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>>

---


### CustomerprofilesRecommenderFilterTagsOutputReference <a name="CustomerprofilesRecommenderFilterTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_recommender_filter.CustomerprofilesRecommenderFilterTagsOutputReference;

new CustomerprofilesRecommenderFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesRecommenderFilterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>

---



