# `elasticacheParameterGroup` Submodule <a name="`elasticacheParameterGroup` Submodule" id="@cdktn/provider-awscc.elasticacheParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheParameterGroup <a name="ElasticacheParameterGroup" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group awscc_elasticache_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroup;

ElasticacheParameterGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cacheParameterGroupFamily(java.lang.String)
    .description(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(IResolvable|java.util.List<ElasticacheParameterGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.cacheParameterGroupFamily">cacheParameterGroupFamily</a></code> | <code>java.lang.String</code> | The name of the cache parameter group family that this cache parameter group is compatible with. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for this cache parameter group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>></code> | Tags are composed of a Key/Value pair. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="cacheParameterGroupFamily" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.cacheParameterGroupFamily"></a>

- *Type:* java.lang.String

The name of the cache parameter group family that this cache parameter group is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#cache_parameter_group_family ElasticacheParameterGroup#cache_parameter_group_family}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for this cache parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#description ElasticacheParameterGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#properties ElasticacheParameterGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>>

Tags are composed of a Key/Value pair.

You can use tags to categorize and track each parameter group. The tag value null is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#tags ElasticacheParameterGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ElasticacheParameterGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroup;

ElasticacheParameterGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroup;

ElasticacheParameterGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroup;

ElasticacheParameterGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroup;

ElasticacheParameterGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticacheParameterGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticacheParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticacheParameterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticacheParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList">ElasticacheParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupFamilyInput">cacheParameterGroupFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupFamily">cacheParameterGroupFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupName"></a>

```java
public java.lang.String getCacheParameterGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tags"></a>

```java
public ElasticacheParameterGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList">ElasticacheParameterGroupTagsList</a>

---

##### `cacheParameterGroupFamilyInput`<sup>Optional</sup> <a name="cacheParameterGroupFamilyInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupFamilyInput"></a>

```java
public java.lang.String getCacheParameterGroupFamilyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ElasticacheParameterGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>>

---

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="cacheParameterGroupFamily" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.cacheParameterGroupFamily"></a>

```java
public java.lang.String getCacheParameterGroupFamily();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheParameterGroupConfig <a name="ElasticacheParameterGroupConfig" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroupConfig;

ElasticacheParameterGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cacheParameterGroupFamily(java.lang.String)
    .description(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(IResolvable|java.util.List<ElasticacheParameterGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.cacheParameterGroupFamily">cacheParameterGroupFamily</a></code> | <code>java.lang.String</code> | The name of the cache parameter group family that this cache parameter group is compatible with. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for this cache parameter group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>></code> | Tags are composed of a Key/Value pair. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheParameterGroupFamily`<sup>Required</sup> <a name="cacheParameterGroupFamily" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.cacheParameterGroupFamily"></a>

```java
public java.lang.String getCacheParameterGroupFamily();
```

- *Type:* java.lang.String

The name of the cache parameter group family that this cache parameter group is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#cache_parameter_group_family ElasticacheParameterGroup#cache_parameter_group_family}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for this cache parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#description ElasticacheParameterGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#properties ElasticacheParameterGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ElasticacheParameterGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>>

Tags are composed of a Key/Value pair.

You can use tags to categorize and track each parameter group. The tag value null is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#tags ElasticacheParameterGroup#tags}

---

### ElasticacheParameterGroupTags <a name="ElasticacheParameterGroupTags" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroupTags;

ElasticacheParameterGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#key ElasticacheParameterGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#value ElasticacheParameterGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#key ElasticacheParameterGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_parameter_group#value ElasticacheParameterGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheParameterGroupTagsList <a name="ElasticacheParameterGroupTagsList" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroupTagsList;

new ElasticacheParameterGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.get"></a>

```java
public ElasticacheParameterGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheParameterGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>>

---


### ElasticacheParameterGroupTagsOutputReference <a name="ElasticacheParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_parameter_group.ElasticacheParameterGroupTagsOutputReference;

new ElasticacheParameterGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheParameterGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheParameterGroup.ElasticacheParameterGroupTags">ElasticacheParameterGroupTags</a>

---



