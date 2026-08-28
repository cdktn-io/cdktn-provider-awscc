# `devopsagentAssociation` Submodule <a name="`devopsagentAssociation` Submodule" id="@cdktn/provider-awscc.devopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssociation <a name="DevopsagentAssociation" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociation;

DevopsagentAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentSpaceId(java.lang.String)
    .configuration(DevopsagentAssociationConfiguration)
    .serviceId(java.lang.String)
//  .linkedAssociationIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.linkedAssociationIds">linkedAssociationIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of linked association IDs for parent-child relationships. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.agentSpaceId"></a>

- *Type:* java.lang.String

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `linkedAssociationIds`<sup>Optional</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.linkedAssociationIds"></a>

- *Type:* java.util.List<java.lang.String>

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds">resetLinkedAssociationIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration"></a>

```java
public void putConfiguration(DevopsagentAssociationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `resetLinkedAssociationIds` <a name="resetLinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds"></a>

```java
public void resetLinkedAssociationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociation;

DevopsagentAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociation;

DevopsagentAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociation;

DevopsagentAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociation;

DevopsagentAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsagentAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsagentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput">agentSpaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput">linkedAssociationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds">linkedAssociationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration"></a>

```java
public DevopsagentAssociationConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `agentSpaceIdInput`<sup>Optional</sup> <a name="agentSpaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput"></a>

```java
public java.lang.String getAgentSpaceIdInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput"></a>

```java
public IResolvable|DevopsagentAssociationConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `linkedAssociationIdsInput`<sup>Optional</sup> <a name="linkedAssociationIdsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput"></a>

```java
public java.util.List<java.lang.String> getLinkedAssociationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

---

##### `linkedAssociationIds`<sup>Required</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds"></a>

```java
public java.util.List<java.lang.String> getLinkedAssociationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssociationConfig <a name="DevopsagentAssociationConfig" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfig;

DevopsagentAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentSpaceId(java.lang.String)
    .configuration(DevopsagentAssociationConfiguration)
    .serviceId(java.lang.String)
//  .linkedAssociationIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds">linkedAssociationIds</a></code> | <code>java.util.List<java.lang.String></code> | Set of linked association IDs for parent-child relationships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration"></a>

```java
public DevopsagentAssociationConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `linkedAssociationIds`<sup>Optional</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds"></a>

```java
public java.util.List<java.lang.String> getLinkedAssociationIds();
```

- *Type:* java.util.List<java.lang.String>

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

### DevopsagentAssociationConfiguration <a name="DevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfiguration;

DevopsagentAssociationConfiguration.builder()
//  .aws(DevopsagentAssociationConfigurationAws)
//  .azure(DevopsagentAssociationConfigurationAzure)
//  .dynatrace(DevopsagentAssociationConfigurationDynatrace)
//  .eventChannel(DevopsagentAssociationConfigurationEventChannel)
//  .gitHub(DevopsagentAssociationConfigurationGitHub)
//  .gitLab(DevopsagentAssociationConfigurationGitLab)
//  .mcpServer(DevopsagentAssociationConfigurationMcpServer)
//  .mcpServerDatadog(DevopsagentAssociationConfigurationMcpServerDatadog)
//  .mcpServerGrafana(DevopsagentAssociationConfigurationMcpServerGrafana)
//  .mcpServerNewRelic(DevopsagentAssociationConfigurationMcpServerNewRelic)
//  .mcpServerSigV4(DevopsagentAssociationConfigurationMcpServerSigV4)
//  .mcpServerSplunk(DevopsagentAssociationConfigurationMcpServerSplunk)
//  .pagerDuty(DevopsagentAssociationConfigurationPagerDuty)
//  .serviceNow(DevopsagentAssociationConfigurationServiceNow)
//  .slack(DevopsagentAssociationConfigurationSlack)
//  .sourceAws(DevopsagentAssociationConfigurationSourceAws)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | AWS association for 'monitor' account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | Azure subscription integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | Dynatrace monitoring configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel">eventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | EventChannelconfiguration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub">gitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | GitHub repository integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | GitLab project integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog">mcpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | Datadog MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | NewRelic MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | PagerDuty integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | ServiceNow integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | Slack workspace integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws">sourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | AWS association for 'source' account. |

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws"></a>

```java
public DevopsagentAssociationConfigurationAws getAws();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure"></a>

```java
public DevopsagentAssociationConfigurationAzure getAzure();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace"></a>

```java
public DevopsagentAssociationConfigurationDynatrace getDynatrace();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

##### `eventChannel`<sup>Optional</sup> <a name="eventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel"></a>

```java
public DevopsagentAssociationConfigurationEventChannel getEventChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

##### `gitHub`<sup>Optional</sup> <a name="gitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub"></a>

```java
public DevopsagentAssociationConfigurationGitHub getGitHub();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

##### `gitLab`<sup>Optional</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab"></a>

```java
public DevopsagentAssociationConfigurationGitLab getGitLab();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

##### `mcpServer`<sup>Optional</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer"></a>

```java
public DevopsagentAssociationConfigurationMcpServer getMcpServer();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

##### `mcpServerDatadog`<sup>Optional</sup> <a name="mcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog"></a>

```java
public DevopsagentAssociationConfigurationMcpServerDatadog getMcpServerDatadog();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

##### `mcpServerGrafana`<sup>Optional</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana"></a>

```java
public DevopsagentAssociationConfigurationMcpServerGrafana getMcpServerGrafana();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

##### `mcpServerNewRelic`<sup>Optional</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic"></a>

```java
public DevopsagentAssociationConfigurationMcpServerNewRelic getMcpServerNewRelic();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

##### `mcpServerSigV4`<sup>Optional</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4"></a>

```java
public DevopsagentAssociationConfigurationMcpServerSigV4 getMcpServerSigV4();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

##### `mcpServerSplunk`<sup>Optional</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk"></a>

```java
public DevopsagentAssociationConfigurationMcpServerSplunk getMcpServerSplunk();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

##### `pagerDuty`<sup>Optional</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty"></a>

```java
public DevopsagentAssociationConfigurationPagerDuty getPagerDuty();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow"></a>

```java
public DevopsagentAssociationConfigurationServiceNow getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack"></a>

```java
public DevopsagentAssociationConfigurationSlack getSlack();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

##### `sourceAws`<sup>Optional</sup> <a name="sourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws"></a>

```java
public DevopsagentAssociationConfigurationSourceAws getSourceAws();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

### DevopsagentAssociationConfigurationAws <a name="DevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAws;

DevopsagentAssociationConfigurationAws.builder()
//  .accountId(java.lang.String)
//  .accountType(java.lang.String)
//  .assumableRoleArn(java.lang.String)
//  .resources(IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsResources>)
//  .tags(IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId">accountId</a></code> | <code>java.lang.String</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType">accountType</a></code> | <code>java.lang.String</code> | Account Type 'monitor' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn">assumableRoleArn</a></code> | <code>java.lang.String</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>></code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>></code> | List of AWS tags as key-value pairs. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumableRoleArn`<sup>Optional</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn"></a>

```java
public java.lang.String getAssumableRoleArn();
```

- *Type:* java.lang.String

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>>

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>>

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationAwsResources <a name="DevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsResources;

DevopsagentAssociationConfigurationAwsResources.builder()
//  .resourceArn(java.lang.String)
//  .resourceMetadata(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata">resourceMetadata</a></code> | <code>java.lang.String</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Resource type. |

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resourceMetadata`<sup>Optional</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata"></a>

```java
public java.lang.String getResourceMetadata();
```

- *Type:* java.lang.String

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationAwsTags <a name="DevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsTags;

DevopsagentAssociationConfigurationAwsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

### DevopsagentAssociationConfigurationAzure <a name="DevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAzure;

DevopsagentAssociationConfigurationAzure.builder()
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Azure subscription ID corresponding to provided resources. |

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

### DevopsagentAssociationConfigurationDynatrace <a name="DevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationDynatrace;

DevopsagentAssociationConfigurationDynatrace.builder()
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .envId(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId">envId</a></code> | <code>java.lang.String</code> | Dynatrace environment id. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | List of Dynatrace resources to monitor. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `envId`<sup>Optional</sup> <a name="envId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

### DevopsagentAssociationConfigurationEventChannel <a name="DevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationEventChannel;

DevopsagentAssociationConfigurationEventChannel.builder()
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

### DevopsagentAssociationConfigurationGitHub <a name="DevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationGitHub;

DevopsagentAssociationConfigurationGitHub.builder()
//  .owner(java.lang.String)
//  .ownerType(java.lang.String)
//  .repoId(java.lang.String)
//  .repoName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner">owner</a></code> | <code>java.lang.String</code> | Repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType">ownerType</a></code> | <code>java.lang.String</code> | Type of repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId">repoId</a></code> | <code>java.lang.String</code> | Associated Github repo ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName">repoName</a></code> | <code>java.lang.String</code> | Associated Github repo name. |

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

##### `ownerType`<sup>Optional</sup> <a name="ownerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType"></a>

```java
public java.lang.String getOwnerType();
```

- *Type:* java.lang.String

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

##### `repoId`<sup>Optional</sup> <a name="repoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId"></a>

```java
public java.lang.String getRepoId();
```

- *Type:* java.lang.String

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

### DevopsagentAssociationConfigurationGitLab <a name="DevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationGitLab;

DevopsagentAssociationConfigurationGitLab.builder()
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .instanceIdentifier(java.lang.String)
//  .projectId(java.lang.String)
//  .projectPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier">instanceIdentifier</a></code> | <code>java.lang.String</code> | GitLab instance identifier. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId">projectId</a></code> | <code>java.lang.String</code> | GitLab numeric project ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath">projectPath</a></code> | <code>java.lang.String</code> | Full GitLab project path (e.g., namespace/project-name). |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instanceIdentifier`<sup>Optional</sup> <a name="instanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier"></a>

```java
public java.lang.String getInstanceIdentifier();
```

- *Type:* java.lang.String

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

##### `projectPath`<sup>Optional</sup> <a name="projectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath"></a>

```java
public java.lang.String getProjectPath();
```

- *Type:* java.lang.String

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

### DevopsagentAssociationConfigurationMcpServer <a name="DevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServer;

DevopsagentAssociationConfigurationMcpServer.builder()
//  .description(java.lang.String)
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
//  .tools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description">description</a></code> | <code>java.lang.String</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of MCP tools that can be used with the association. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerDatadog <a name="DevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerDatadog;

DevopsagentAssociationConfigurationMcpServerDatadog.builder()
//  .description(java.lang.String)
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description">description</a></code> | <code>java.lang.String</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationMcpServerGrafana <a name="DevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerGrafana;

DevopsagentAssociationConfigurationMcpServerGrafana.builder()
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .tools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of tool categories to enable for the Grafana MCP server. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerNewRelic <a name="DevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerNewRelic;

DevopsagentAssociationConfigurationMcpServerNewRelic.builder()
//  .accountId(java.lang.String)
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId">accountId</a></code> | <code>java.lang.String</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/). |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

### DevopsagentAssociationConfigurationMcpServerSigV4 <a name="DevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerSigV4;

DevopsagentAssociationConfigurationMcpServerSigV4.builder()
//  .tools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of MCP tools available for the association. |

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerSplunk <a name="DevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerSplunk;

DevopsagentAssociationConfigurationMcpServerSplunk.builder()
//  .description(java.lang.String)
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description">description</a></code> | <code>java.lang.String</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationPagerDuty <a name="DevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationPagerDuty;

DevopsagentAssociationConfigurationPagerDuty.builder()
//  .customerEmail(java.lang.String)
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .services(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail">customerEmail</a></code> | <code>java.lang.String</code> | Email to be used in PagerDuty API header. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | List of PagerDuty service IDs available for the association. |

---

##### `customerEmail`<sup>Optional</sup> <a name="customerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail"></a>

```java
public java.lang.String getCustomerEmail();
```

- *Type:* java.lang.String

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

### DevopsagentAssociationConfigurationServiceNow <a name="DevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationServiceNow;

DevopsagentAssociationConfigurationServiceNow.builder()
//  .enableWebhookUpdates(java.lang.Boolean|IResolvable)
//  .instanceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | ServiceNow instance ID. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

### DevopsagentAssociationConfigurationSlack <a name="DevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlack;

DevopsagentAssociationConfigurationSlack.builder()
//  .transmissionTarget(DevopsagentAssociationConfigurationSlackTransmissionTarget)
//  .workspaceId(java.lang.String)
//  .workspaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget">transmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | Transmission targets for agent notifications. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Associated Slack workspace ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Associated Slack workspace name. |

---

##### `transmissionTarget`<sup>Optional</sup> <a name="transmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget"></a>

```java
public DevopsagentAssociationConfigurationSlackTransmissionTarget getTransmissionTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

### DevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlackTransmissionTarget;

DevopsagentAssociationConfigurationSlackTransmissionTarget.builder()
//  .incidentResponseTarget(DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget">incidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | Destination for IncidentResponse agent. |

---

##### `incidentResponseTarget`<sup>Optional</sup> <a name="incidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget"></a>

```java
public DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget getIncidentResponseTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;

DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.builder()
//  .channelId(java.lang.String)
//  .channelName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId">channelId</a></code> | <code>java.lang.String</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Slack channel name. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

### DevopsagentAssociationConfigurationSourceAws <a name="DevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAws;

DevopsagentAssociationConfigurationSourceAws.builder()
//  .accountId(java.lang.String)
//  .accountType(java.lang.String)
//  .assumableRoleArn(java.lang.String)
//  .resources(IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsResources>)
//  .tags(IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId">accountId</a></code> | <code>java.lang.String</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType">accountType</a></code> | <code>java.lang.String</code> | Account Type 'source' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn">assumableRoleArn</a></code> | <code>java.lang.String</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>></code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>></code> | List of AWS tags as key-value pairs. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumableRoleArn`<sup>Optional</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn"></a>

```java
public java.lang.String getAssumableRoleArn();
```

- *Type:* java.lang.String

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>>

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>>

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationSourceAwsResources <a name="DevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsResources;

DevopsagentAssociationConfigurationSourceAwsResources.builder()
//  .resourceArn(java.lang.String)
//  .resourceMetadata(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata">resourceMetadata</a></code> | <code>java.lang.String</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Resource type. |

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resourceMetadata`<sup>Optional</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata"></a>

```java
public java.lang.String getResourceMetadata();
```

- *Type:* java.lang.String

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationSourceAwsTags <a name="DevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsTags;

DevopsagentAssociationConfigurationSourceAwsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssociationConfigurationAwsOutputReference <a name="DevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsOutputReference;

new DevopsagentAssociationConfigurationAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn">resetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAccountType` <a name="resetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType"></a>

```java
public void resetAccountType()
```

##### `resetAssumableRoleArn` <a name="resetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn"></a>

```java
public void resetAssumableRoleArn()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput">assumableRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```java
public DevopsagentAssociationConfigurationAwsResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```java
public DevopsagentAssociationConfigurationAwsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput"></a>

```java
public java.lang.String getAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `assumableRoleArnInput`<sup>Optional</sup> <a name="assumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput"></a>

```java
public java.lang.String getAssumableRoleArnInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```java
public java.lang.String getAssumableRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAws getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---


### DevopsagentAssociationConfigurationAwsResourcesList <a name="DevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsResourcesList;

new DevopsagentAssociationConfigurationAwsResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```java
public DevopsagentAssociationConfigurationAwsResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>>

---


### DevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsResourcesOutputReference;

new DevopsagentAssociationConfigurationAwsResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata">resetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetResourceMetadata` <a name="resetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata"></a>

```java
public void resetResourceMetadata()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput">resourceMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourceMetadataInput`<sup>Optional</sup> <a name="resourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```java
public java.lang.String getResourceMetadataInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```java
public java.lang.String getResourceMetadata();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAwsResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>

---


### DevopsagentAssociationConfigurationAwsTagsList <a name="DevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsTagsList;

new DevopsagentAssociationConfigurationAwsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get"></a>

```java
public DevopsagentAssociationConfigurationAwsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationAwsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>>

---


### DevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAwsTagsOutputReference;

new DevopsagentAssociationConfigurationAwsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAwsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>

---


### DevopsagentAssociationConfigurationAzureOutputReference <a name="DevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationAzureOutputReference;

new DevopsagentAssociationConfigurationAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAzure getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---


### DevopsagentAssociationConfigurationDynatraceOutputReference <a name="DevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationDynatraceOutputReference;

new DevopsagentAssociationConfigurationDynatraceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId">resetEnvId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetEnvId` <a name="resetEnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId"></a>

```java
public void resetEnvId()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationDynatrace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---


### DevopsagentAssociationConfigurationEventChannelOutputReference <a name="DevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationEventChannelOutputReference;

new DevopsagentAssociationConfigurationEventChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationEventChannel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---


### DevopsagentAssociationConfigurationGitHubOutputReference <a name="DevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationGitHubOutputReference;

new DevopsagentAssociationConfigurationGitHubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType">resetOwnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId">resetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetOwnerType` <a name="resetOwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType"></a>

```java
public void resetOwnerType()
```

##### `resetRepoId` <a name="resetRepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId"></a>

```java
public void resetRepoId()
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName"></a>

```java
public void resetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput">ownerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput">repoIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">ownerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">repoId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `ownerTypeInput`<sup>Optional</sup> <a name="ownerTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput"></a>

```java
public java.lang.String getOwnerTypeInput();
```

- *Type:* java.lang.String

---

##### `repoIdInput`<sup>Optional</sup> <a name="repoIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput"></a>

```java
public java.lang.String getRepoIdInput();
```

- *Type:* java.lang.String

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput"></a>

```java
public java.lang.String getRepoNameInput();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerType`<sup>Required</sup> <a name="ownerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```java
public java.lang.String getOwnerType();
```

- *Type:* java.lang.String

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```java
public java.lang.String getRepoId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationGitHub getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---


### DevopsagentAssociationConfigurationGitLabOutputReference <a name="DevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationGitLabOutputReference;

new DevopsagentAssociationConfigurationGitLabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier">resetInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath">resetProjectPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetInstanceIdentifier` <a name="resetInstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier"></a>

```java
public void resetInstanceIdentifier()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetProjectPath` <a name="resetProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath"></a>

```java
public void resetProjectPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput">instanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput">projectPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">instanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">projectPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceIdentifierInput`<sup>Optional</sup> <a name="instanceIdentifierInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput"></a>

```java
public java.lang.String getInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectPathInput`<sup>Optional</sup> <a name="projectPathInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput"></a>

```java
public java.lang.String getProjectPathInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceIdentifier`<sup>Required</sup> <a name="instanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```java
public java.lang.String getInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `projectPath`<sup>Required</sup> <a name="projectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```java
public java.lang.String getProjectPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationGitLab getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---


### DevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference;

new DevopsagentAssociationConfigurationMcpServerDatadogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerDatadog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference;

new DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools"></a>

```java
public void resetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerGrafana getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference;

new DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerNewRelic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DevopsagentAssociationConfigurationMcpServerOutputReference <a name="DevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerOutputReference;

new DevopsagentAssociationConfigurationMcpServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools"></a>

```java
public void resetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---


### DevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference;

new DevopsagentAssociationConfigurationMcpServerSigV4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools"></a>

```java
public void resetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerSigV4 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference;

new DevopsagentAssociationConfigurationMcpServerSplunkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerSplunk getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DevopsagentAssociationConfigurationOutputReference <a name="DevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationOutputReference;

new DevopsagentAssociationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace">putDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel">putEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub">putGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab">putGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer">putMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog">putMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana">putMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic">putMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4">putMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk">putMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty">putPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws">putSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace">resetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel">resetEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub">resetGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab">resetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer">resetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog">resetMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana">resetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic">resetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4">resetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk">resetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty">resetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws">resetSourceAws</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAws` <a name="putAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws"></a>

```java
public void putAws(DevopsagentAssociationConfigurationAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure"></a>

```java
public void putAzure(DevopsagentAssociationConfigurationAzure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `putDynatrace` <a name="putDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace"></a>

```java
public void putDynatrace(DevopsagentAssociationConfigurationDynatrace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `putEventChannel` <a name="putEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel"></a>

```java
public void putEventChannel(DevopsagentAssociationConfigurationEventChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `putGitHub` <a name="putGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub"></a>

```java
public void putGitHub(DevopsagentAssociationConfigurationGitHub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `putGitLab` <a name="putGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab"></a>

```java
public void putGitLab(DevopsagentAssociationConfigurationGitLab value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `putMcpServer` <a name="putMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer"></a>

```java
public void putMcpServer(DevopsagentAssociationConfigurationMcpServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `putMcpServerDatadog` <a name="putMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog"></a>

```java
public void putMcpServerDatadog(DevopsagentAssociationConfigurationMcpServerDatadog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `putMcpServerGrafana` <a name="putMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana"></a>

```java
public void putMcpServerGrafana(DevopsagentAssociationConfigurationMcpServerGrafana value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `putMcpServerNewRelic` <a name="putMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic"></a>

```java
public void putMcpServerNewRelic(DevopsagentAssociationConfigurationMcpServerNewRelic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `putMcpServerSigV4` <a name="putMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4"></a>

```java
public void putMcpServerSigV4(DevopsagentAssociationConfigurationMcpServerSigV4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `putMcpServerSplunk` <a name="putMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk"></a>

```java
public void putMcpServerSplunk(DevopsagentAssociationConfigurationMcpServerSplunk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `putPagerDuty` <a name="putPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty"></a>

```java
public void putPagerDuty(DevopsagentAssociationConfigurationPagerDuty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow"></a>

```java
public void putServiceNow(DevopsagentAssociationConfigurationServiceNow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack"></a>

```java
public void putSlack(DevopsagentAssociationConfigurationSlack value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `putSourceAws` <a name="putSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws"></a>

```java
public void putSourceAws(DevopsagentAssociationConfigurationSourceAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws"></a>

```java
public void resetAws()
```

##### `resetAzure` <a name="resetAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetDynatrace` <a name="resetDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace"></a>

```java
public void resetDynatrace()
```

##### `resetEventChannel` <a name="resetEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel"></a>

```java
public void resetEventChannel()
```

##### `resetGitHub` <a name="resetGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub"></a>

```java
public void resetGitHub()
```

##### `resetGitLab` <a name="resetGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab"></a>

```java
public void resetGitLab()
```

##### `resetMcpServer` <a name="resetMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer"></a>

```java
public void resetMcpServer()
```

##### `resetMcpServerDatadog` <a name="resetMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog"></a>

```java
public void resetMcpServerDatadog()
```

##### `resetMcpServerGrafana` <a name="resetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana"></a>

```java
public void resetMcpServerGrafana()
```

##### `resetMcpServerNewRelic` <a name="resetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic"></a>

```java
public void resetMcpServerNewRelic()
```

##### `resetMcpServerSigV4` <a name="resetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4"></a>

```java
public void resetMcpServerSigV4()
```

##### `resetMcpServerSplunk` <a name="resetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk"></a>

```java
public void resetMcpServerSplunk()
```

##### `resetPagerDuty` <a name="resetPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty"></a>

```java
public void resetPagerDuty()
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow"></a>

```java
public void resetServiceNow()
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack"></a>

```java
public void resetSlack()
```

##### `resetSourceAws` <a name="resetSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws"></a>

```java
public void resetSourceAws()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel">eventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub">gitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">mcpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws">sourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput">awsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput">azureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput">dynatraceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput">eventChannelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput">gitHubInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput">gitLabInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput">mcpServerDatadogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput">mcpServerGrafanaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput">mcpServerNewRelicInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input">mcpServerSigV4Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput">mcpServerSplunkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput">pagerDutyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput">slackInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput">sourceAwsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```java
public DevopsagentAssociationConfigurationAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```java
public DevopsagentAssociationConfigurationAzureOutputReference getAzure();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```java
public DevopsagentAssociationConfigurationDynatraceOutputReference getDynatrace();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `eventChannel`<sup>Required</sup> <a name="eventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```java
public DevopsagentAssociationConfigurationEventChannelOutputReference getEventChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `gitHub`<sup>Required</sup> <a name="gitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```java
public DevopsagentAssociationConfigurationGitHubOutputReference getGitHub();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```java
public DevopsagentAssociationConfigurationGitLabOutputReference getGitLab();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```java
public DevopsagentAssociationConfigurationMcpServerOutputReference getMcpServer();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `mcpServerDatadog`<sup>Required</sup> <a name="mcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```java
public DevopsagentAssociationConfigurationMcpServerDatadogOutputReference getMcpServerDatadog();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```java
public DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference getMcpServerGrafana();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```java
public DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference getMcpServerNewRelic();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```java
public DevopsagentAssociationConfigurationMcpServerSigV4OutputReference getMcpServerSigV4();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```java
public DevopsagentAssociationConfigurationMcpServerSplunkOutputReference getMcpServerSplunk();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```java
public DevopsagentAssociationConfigurationPagerDutyOutputReference getPagerDuty();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```java
public DevopsagentAssociationConfigurationServiceNowOutputReference getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```java
public DevopsagentAssociationConfigurationSlackOutputReference getSlack();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `sourceAws`<sup>Required</sup> <a name="sourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```java
public DevopsagentAssociationConfigurationSourceAwsOutputReference getSourceAws();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAws getAwsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationAzure getAzureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `dynatraceInput`<sup>Optional</sup> <a name="dynatraceInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationDynatrace getDynatraceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `eventChannelInput`<sup>Optional</sup> <a name="eventChannelInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationEventChannel getEventChannelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `gitHubInput`<sup>Optional</sup> <a name="gitHubInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationGitHub getGitHubInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `gitLabInput`<sup>Optional</sup> <a name="gitLabInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationGitLab getGitLabInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `mcpServerDatadogInput`<sup>Optional</sup> <a name="mcpServerDatadogInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerDatadog getMcpServerDatadogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `mcpServerGrafanaInput`<sup>Optional</sup> <a name="mcpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerGrafana getMcpServerGrafanaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServer getMcpServerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `mcpServerNewRelicInput`<sup>Optional</sup> <a name="mcpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerNewRelic getMcpServerNewRelicInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `mcpServerSigV4Input`<sup>Optional</sup> <a name="mcpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerSigV4 getMcpServerSigV4Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `mcpServerSplunkInput`<sup>Optional</sup> <a name="mcpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationMcpServerSplunk getMcpServerSplunkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `pagerDutyInput`<sup>Optional</sup> <a name="pagerDutyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationPagerDuty getPagerDutyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationServiceNow getServiceNowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlack getSlackInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `sourceAwsInput`<sup>Optional</sup> <a name="sourceAwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSourceAws getSourceAwsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---


### DevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationPagerDutyOutputReference;

new DevopsagentAssociationConfigurationPagerDutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail">resetCustomerEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerEmail` <a name="resetCustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail"></a>

```java
public void resetCustomerEmail()
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetServices` <a name="resetServices" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices"></a>

```java
public void resetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput">customerEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">customerEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerEmailInput`<sup>Optional</sup> <a name="customerEmailInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput"></a>

```java
public java.lang.String getCustomerEmailInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerEmail`<sup>Required</sup> <a name="customerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```java
public java.lang.String getCustomerEmail();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationPagerDuty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---


### DevopsagentAssociationConfigurationServiceNowOutputReference <a name="DevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationServiceNowOutputReference;

new DevopsagentAssociationConfigurationServiceNowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates"></a>

```java
public void resetEnableWebhookUpdates()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebhookUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationServiceNow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---


### DevopsagentAssociationConfigurationSlackOutputReference <a name="DevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlackOutputReference;

new DevopsagentAssociationConfigurationSlackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget">putTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget">resetTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName">resetWorkspaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransmissionTarget` <a name="putTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget"></a>

```java
public void putTransmissionTarget(DevopsagentAssociationConfigurationSlackTransmissionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `resetTransmissionTarget` <a name="resetTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget"></a>

```java
public void resetTransmissionTarget()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

##### `resetWorkspaceName` <a name="resetWorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName"></a>

```java
public void resetWorkspaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">transmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput">transmissionTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput">workspaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transmissionTarget`<sup>Required</sup> <a name="transmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```java
public DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference getTransmissionTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `transmissionTargetInput`<sup>Optional</sup> <a name="transmissionTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTarget getTransmissionTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput"></a>

```java
public java.lang.String getWorkspaceNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlack getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference;

new DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId"></a>

```java
public void resetChannelId()
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName"></a>

```java
public void resetChannelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference;

new DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget">putIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget">resetIncidentResponseTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncidentResponseTarget` <a name="putIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget"></a>

```java
public void putIncidentResponseTarget(DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `resetIncidentResponseTarget` <a name="resetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget"></a>

```java
public void resetIncidentResponseTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">incidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput">incidentResponseTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `incidentResponseTarget`<sup>Required</sup> <a name="incidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```java
public DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference getIncidentResponseTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `incidentResponseTargetInput`<sup>Optional</sup> <a name="incidentResponseTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget getIncidentResponseTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsOutputReference;

new DevopsagentAssociationConfigurationSourceAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn">resetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAccountType` <a name="resetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType"></a>

```java
public void resetAccountType()
```

##### `resetAssumableRoleArn` <a name="resetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn"></a>

```java
public void resetAssumableRoleArn()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput">assumableRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```java
public DevopsagentAssociationConfigurationSourceAwsResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```java
public DevopsagentAssociationConfigurationSourceAwsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput"></a>

```java
public java.lang.String getAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `assumableRoleArnInput`<sup>Optional</sup> <a name="assumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput"></a>

```java
public java.lang.String getAssumableRoleArnInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```java
public java.lang.String getAssumableRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSourceAws getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---


### DevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsResourcesList;

new DevopsagentAssociationConfigurationSourceAwsResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```java
public DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>>

---


### DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference;

new DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata">resetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetResourceMetadata` <a name="resetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata"></a>

```java
public void resetResourceMetadata()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput">resourceMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `resourceMetadataInput`<sup>Optional</sup> <a name="resourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```java
public java.lang.String getResourceMetadataInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```java
public java.lang.String getResourceMetadata();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSourceAwsResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DevopsagentAssociationConfigurationSourceAwsTagsList <a name="DevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsTagsList;

new DevopsagentAssociationConfigurationSourceAwsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```java
public DevopsagentAssociationConfigurationSourceAwsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAssociationConfigurationSourceAwsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>>

---


### DevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_association.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference;

new DevopsagentAssociationConfigurationSourceAwsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAssociationConfigurationSourceAwsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>

---



