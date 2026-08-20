# `ecsClusterCapacityProviderAssociations` Submodule <a name="`ecsClusterCapacityProviderAssociations` Submodule" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviderAssociations <a name="EcsClusterCapacityProviderAssociations" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociations;

EcsClusterCapacityProviderAssociations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .defaultCapacityProviderStrategy(IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy>)
//  .capacityProviders(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>></code> | List of capacity providers to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.capacityProviders">capacityProviders</a></code> | <code>java.util.List<java.lang.String></code> | List of capacity providers to associate with the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The name of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#cluster EcsClusterCapacityProviderAssociations#cluster}

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.defaultCapacityProviderStrategy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>>

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#default_capacity_provider_strategy EcsClusterCapacityProviderAssociations#default_capacity_provider_strategy}

---

##### `capacityProviders`<sup>Optional</sup> <a name="capacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.Initializer.parameter.capacityProviders"></a>

- *Type:* java.util.List<java.lang.String>

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_providers EcsClusterCapacityProviderAssociations#capacity_providers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy">putDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders">resetCapacityProviders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultCapacityProviderStrategy` <a name="putDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy"></a>

```java
public void putDefaultCapacityProviderStrategy(IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>>

---

##### `resetCapacityProviders` <a name="resetCapacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.resetCapacityProviders"></a>

```java
public void resetCapacityProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociations;

EcsClusterCapacityProviderAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociations;

EcsClusterCapacityProviderAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociations;

EcsClusterCapacityProviderAssociations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociations;

EcsClusterCapacityProviderAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsClusterCapacityProviderAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsClusterCapacityProviderAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsClusterCapacityProviderAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcsClusterCapacityProviderAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput">capacityProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput">defaultCapacityProviderStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders">capacityProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy"></a>

```java
public EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList getDefaultCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `capacityProvidersInput`<sup>Optional</sup> <a name="capacityProvidersInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProvidersInput"></a>

```java
public java.util.List<java.lang.String> getCapacityProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `defaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="defaultCapacityProviderStrategyInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategyInput"></a>

```java
public IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy> getDefaultCapacityProviderStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>>

---

##### `capacityProviders`<sup>Required</sup> <a name="capacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.capacityProviders"></a>

```java
public java.util.List<java.lang.String> getCapacityProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProviderAssociationsConfig <a name="EcsClusterCapacityProviderAssociationsConfig" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociationsConfig;

EcsClusterCapacityProviderAssociationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .defaultCapacityProviderStrategy(IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy>)
//  .capacityProviders(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>></code> | List of capacity providers to associate with the cluster. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders">capacityProviders</a></code> | <code>java.util.List<java.lang.String></code> | List of capacity providers to associate with the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The name of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#cluster EcsClusterCapacityProviderAssociations#cluster}

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.defaultCapacityProviderStrategy"></a>

```java
public IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy> getDefaultCapacityProviderStrategy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>>

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#default_capacity_provider_strategy EcsClusterCapacityProviderAssociations#default_capacity_provider_strategy}

---

##### `capacityProviders`<sup>Optional</sup> <a name="capacityProviders" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsConfig.property.capacityProviders"></a>

```java
public java.util.List<java.lang.String> getCapacityProviders();
```

- *Type:* java.util.List<java.lang.String>

List of capacity providers to associate with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_providers EcsClusterCapacityProviderAssociations#capacity_providers}

---

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy;

EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.builder()
    .capacityProvider(java.lang.String)
//  .base(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#capacity_provider EcsClusterCapacityProviderAssociations#capacity_provider}

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#base EcsClusterCapacityProviderAssociations#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_cluster_capacity_provider_associations#weight EcsClusterCapacityProviderAssociations#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList;

new EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get"></a>

```java
public EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>>

---


### EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_cluster_capacity_provider_associations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference;

new EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsClusterCapacityProviderAssociations.EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">EcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>

---



