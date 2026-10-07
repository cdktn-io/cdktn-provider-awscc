# `wisdomContentAssociation` Submodule <a name="`wisdomContentAssociation` Submodule" id="@cdktn/provider-awscc.wisdomContentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomContentAssociation <a name="WisdomContentAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association awscc_wisdom_content_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociation;

WisdomContentAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .association(WisdomContentAssociationAssociation)
    .associationType(java.lang.String)
    .contentId(java.lang.String)
    .knowledgeBaseId(java.lang.String)
//  .tags(IResolvable|java.util.List<WisdomContentAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | The identifier of the associated resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.associationType">associationType</a></code> | <code>java.lang.String</code> | The type of association. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.contentId">contentId</a></code> | <code>java.lang.String</code> | The identifier of the content. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | The identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.association"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

The identifier of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association WisdomContentAssociation#association}

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.associationType"></a>

- *Type:* java.lang.String

The type of association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association_type WisdomContentAssociation#association_type}

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.contentId"></a>

- *Type:* java.lang.String

The identifier of the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#content_id WisdomContentAssociation#content_id}

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* java.lang.String

The identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#knowledge_base_id WisdomContentAssociation#knowledge_base_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#tags WisdomContentAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation">putAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociation` <a name="putAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation"></a>

```java
public void putAssociation(WisdomContentAssociationAssociation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WisdomContentAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomContentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociation;

WisdomContentAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociation;

WisdomContentAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociation;

WisdomContentAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociation;

WisdomContentAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WisdomContentAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WisdomContentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WisdomContentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WisdomContentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WisdomContentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference">WisdomContentAssociationAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentArn">contentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationArn">contentAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationId">contentAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList">WisdomContentAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationInput">associationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationTypeInput">associationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentIdInput">contentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationType">associationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentId">contentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.association"></a>

```java
public WisdomContentAssociationAssociationOutputReference getAssociation();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference">WisdomContentAssociationAssociationOutputReference</a>

---

##### `contentArn`<sup>Required</sup> <a name="contentArn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentArn"></a>

```java
public java.lang.String getContentArn();
```

- *Type:* java.lang.String

---

##### `contentAssociationArn`<sup>Required</sup> <a name="contentAssociationArn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationArn"></a>

```java
public java.lang.String getContentAssociationArn();
```

- *Type:* java.lang.String

---

##### `contentAssociationId`<sup>Required</sup> <a name="contentAssociationId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationId"></a>

```java
public java.lang.String getContentAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tags"></a>

```java
public WisdomContentAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList">WisdomContentAssociationTagsList</a>

---

##### `associationInput`<sup>Optional</sup> <a name="associationInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationInput"></a>

```java
public IResolvable|WisdomContentAssociationAssociation getAssociationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

---

##### `associationTypeInput`<sup>Optional</sup> <a name="associationTypeInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationTypeInput"></a>

```java
public java.lang.String getAssociationTypeInput();
```

- *Type:* java.lang.String

---

##### `contentIdInput`<sup>Optional</sup> <a name="contentIdInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentIdInput"></a>

```java
public java.lang.String getContentIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseIdInput"></a>

```java
public java.lang.String getKnowledgeBaseIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WisdomContentAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>>

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationType"></a>

```java
public java.lang.String getAssociationType();
```

- *Type:* java.lang.String

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentId"></a>

```java
public java.lang.String getContentId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomContentAssociationAssociation <a name="WisdomContentAssociationAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationAssociation;

WisdomContentAssociationAssociation.builder()
    .amazonConnectGuideAssociation(WisdomContentAssociationAssociationAmazonConnectGuideAssociation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.property.amazonConnectGuideAssociation">amazonConnectGuideAssociation</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association WisdomContentAssociation#amazon_connect_guide_association}. |

---

##### `amazonConnectGuideAssociation`<sup>Required</sup> <a name="amazonConnectGuideAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.property.amazonConnectGuideAssociation"></a>

```java
public WisdomContentAssociationAssociationAmazonConnectGuideAssociation getAmazonConnectGuideAssociation();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association WisdomContentAssociation#amazon_connect_guide_association}.

---

### WisdomContentAssociationAssociationAmazonConnectGuideAssociation <a name="WisdomContentAssociationAssociationAmazonConnectGuideAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationAssociationAmazonConnectGuideAssociation;

WisdomContentAssociationAssociationAmazonConnectGuideAssociation.builder()
//  .flowId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.property.flowId">flowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id WisdomContentAssociation#flow_id}. |

---

##### `flowId`<sup>Optional</sup> <a name="flowId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id WisdomContentAssociation#flow_id}.

---

### WisdomContentAssociationConfig <a name="WisdomContentAssociationConfig" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationConfig;

WisdomContentAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .association(WisdomContentAssociationAssociation)
    .associationType(java.lang.String)
    .contentId(java.lang.String)
    .knowledgeBaseId(java.lang.String)
//  .tags(IResolvable|java.util.List<WisdomContentAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | The identifier of the associated resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.associationType">associationType</a></code> | <code>java.lang.String</code> | The type of association. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.contentId">contentId</a></code> | <code>java.lang.String</code> | The identifier of the content. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | The identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>></code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.association"></a>

```java
public WisdomContentAssociationAssociation getAssociation();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

The identifier of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association WisdomContentAssociation#association}

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.associationType"></a>

```java
public java.lang.String getAssociationType();
```

- *Type:* java.lang.String

The type of association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association_type WisdomContentAssociation#association_type}

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.contentId"></a>

```java
public java.lang.String getContentId();
```

- *Type:* java.lang.String

The identifier of the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#content_id WisdomContentAssociation#content_id}

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

The identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#knowledge_base_id WisdomContentAssociation#knowledge_base_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WisdomContentAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>>

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#tags WisdomContentAssociation#tags}

---

### WisdomContentAssociationTags <a name="WisdomContentAssociationTags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationTags;

WisdomContentAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#key WisdomContentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#value WisdomContentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#key WisdomContentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#value WisdomContentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference <a name="WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference;

new WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resetFlowId">resetFlowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowId` <a name="resetFlowId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resetFlowId"></a>

```java
public void resetFlowId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowIdInput"></a>

```java
public java.lang.String getFlowIdInput();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomContentAssociationAssociationAmazonConnectGuideAssociation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---


### WisdomContentAssociationAssociationOutputReference <a name="WisdomContentAssociationAssociationOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationAssociationOutputReference;

new WisdomContentAssociationAssociationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation">putAmazonConnectGuideAssociation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonConnectGuideAssociation` <a name="putAmazonConnectGuideAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation"></a>

```java
public void putAmazonConnectGuideAssociation(WisdomContentAssociationAssociationAmazonConnectGuideAssociation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation">amazonConnectGuideAssociation</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociationInput">amazonConnectGuideAssociationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonConnectGuideAssociation`<sup>Required</sup> <a name="amazonConnectGuideAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation"></a>

```java
public WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference getAmazonConnectGuideAssociation();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a>

---

##### `amazonConnectGuideAssociationInput`<sup>Optional</sup> <a name="amazonConnectGuideAssociationInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociationInput"></a>

```java
public IResolvable|WisdomContentAssociationAssociationAmazonConnectGuideAssociation getAmazonConnectGuideAssociationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomContentAssociationAssociation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

---


### WisdomContentAssociationTagsList <a name="WisdomContentAssociationTagsList" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationTagsList;

new WisdomContentAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get"></a>

```java
public WisdomContentAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomContentAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>>

---


### WisdomContentAssociationTagsOutputReference <a name="WisdomContentAssociationTagsOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_content_association.WisdomContentAssociationTagsOutputReference;

new WisdomContentAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomContentAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>

---



