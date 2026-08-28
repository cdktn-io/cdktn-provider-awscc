# `appsyncSourceApiAssociation` Submodule <a name="`appsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.appsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncSourceApiAssociation <a name="AppsyncSourceApiAssociation" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociation;

AppsyncSourceApiAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .mergedApiIdentifier(java.lang.String)
//  .sourceApiAssociationConfig(AppsyncSourceApiAssociationSourceApiAssociationConfig)
//  .sourceApiIdentifier(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>java.lang.String</code> | Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | Customized configuration for SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>java.lang.String</code> | Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}

---

##### `mergedApiIdentifier`<sup>Optional</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.mergedApiIdentifier"></a>

- *Type:* java.lang.String

Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#merged_api_identifier AppsyncSourceApiAssociation#merged_api_identifier}

---

##### `sourceApiAssociationConfig`<sup>Optional</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.sourceApiAssociationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

Customized configuration for SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}

---

##### `sourceApiIdentifier`<sup>Optional</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.Initializer.parameter.sourceApiIdentifier"></a>

- *Type:* java.lang.String

Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_identifier AppsyncSourceApiAssociation#source_api_identifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig">putSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier">resetMergedApiIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig">resetSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier">resetSourceApiIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceApiAssociationConfig` <a name="putSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig"></a>

```java
public void putSourceApiAssociationConfig(AppsyncSourceApiAssociationSourceApiAssociationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.putSourceApiAssociationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMergedApiIdentifier` <a name="resetMergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetMergedApiIdentifier"></a>

```java
public void resetMergedApiIdentifier()
```

##### `resetSourceApiAssociationConfig` <a name="resetSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiAssociationConfig"></a>

```java
public void resetSourceApiAssociationConfig()
```

##### `resetSourceApiIdentifier` <a name="resetSourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.resetSourceApiIdentifier"></a>

```java
public void resetSourceApiIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociation;

AppsyncSourceApiAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociation;

AppsyncSourceApiAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociation;

AppsyncSourceApiAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociation;

AppsyncSourceApiAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncSourceApiAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncSourceApiAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn">associationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">lastSuccessfulMergeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn">mergedApiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId">mergedApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn">sourceApiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus">sourceApiAssociationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">sourceApiAssociationStatusDetail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId">sourceApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput">mergedApiIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput">sourceApiAssociationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput">sourceApiIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationArn`<sup>Required</sup> <a name="associationArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationArn"></a>

```java
public java.lang.String getAssociationArn();
```

- *Type:* java.lang.String

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulMergeDate`<sup>Required</sup> <a name="lastSuccessfulMergeDate" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```java
public java.lang.String getLastSuccessfulMergeDate();
```

- *Type:* java.lang.String

---

##### `mergedApiArn`<sup>Required</sup> <a name="mergedApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiArn"></a>

```java
public java.lang.String getMergedApiArn();
```

- *Type:* java.lang.String

---

##### `mergedApiId`<sup>Required</sup> <a name="mergedApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiId"></a>

```java
public java.lang.String getMergedApiId();
```

- *Type:* java.lang.String

---

##### `sourceApiArn`<sup>Required</sup> <a name="sourceApiArn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiArn"></a>

```java
public java.lang.String getSourceApiArn();
```

- *Type:* java.lang.String

---

##### `sourceApiAssociationConfig`<sup>Required</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```java
public AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference getSourceApiAssociationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `sourceApiAssociationStatus`<sup>Required</sup> <a name="sourceApiAssociationStatus" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```java
public java.lang.String getSourceApiAssociationStatus();
```

- *Type:* java.lang.String

---

##### `sourceApiAssociationStatusDetail`<sup>Required</sup> <a name="sourceApiAssociationStatusDetail" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```java
public java.lang.String getSourceApiAssociationStatusDetail();
```

- *Type:* java.lang.String

---

##### `sourceApiId`<sup>Required</sup> <a name="sourceApiId" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiId"></a>

```java
public java.lang.String getSourceApiId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `mergedApiIdentifierInput`<sup>Optional</sup> <a name="mergedApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifierInput"></a>

```java
public java.lang.String getMergedApiIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceApiAssociationConfigInput`<sup>Optional</sup> <a name="sourceApiAssociationConfigInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiAssociationConfigInput"></a>

```java
public IResolvable|AppsyncSourceApiAssociationSourceApiAssociationConfig getSourceApiAssociationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---

##### `sourceApiIdentifierInput`<sup>Optional</sup> <a name="sourceApiIdentifierInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifierInput"></a>

```java
public java.lang.String getSourceApiIdentifierInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `mergedApiIdentifier`<sup>Required</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```java
public java.lang.String getMergedApiIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceApiIdentifier`<sup>Required</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```java
public java.lang.String getSourceApiIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociationConfig;

AppsyncSourceApiAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .mergedApiIdentifier(java.lang.String)
//  .sourceApiAssociationConfig(AppsyncSourceApiAssociationSourceApiAssociationConfig)
//  .sourceApiIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier">mergedApiIdentifier</a></code> | <code>java.lang.String</code> | Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig">sourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | Customized configuration for SourceApiAssociation. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier">sourceApiIdentifier</a></code> | <code>java.lang.String</code> | Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}

---

##### `mergedApiIdentifier`<sup>Optional</sup> <a name="mergedApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.mergedApiIdentifier"></a>

```java
public java.lang.String getMergedApiIdentifier();
```

- *Type:* java.lang.String

Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#merged_api_identifier AppsyncSourceApiAssociation#merged_api_identifier}

---

##### `sourceApiAssociationConfig`<sup>Optional</sup> <a name="sourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiAssociationConfig"></a>

```java
public AppsyncSourceApiAssociationSourceApiAssociationConfig getSourceApiAssociationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

Customized configuration for SourceApiAssociation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}

---

##### `sourceApiIdentifier`<sup>Optional</sup> <a name="sourceApiIdentifier" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationConfig.property.sourceApiIdentifier"></a>

```java
public java.lang.String getSourceApiIdentifier();
```

- *Type:* java.lang.String

Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#source_api_identifier AppsyncSourceApiAssociation#source_api_identifier}

---

### AppsyncSourceApiAssociationSourceApiAssociationConfig <a name="AppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociationSourceApiAssociationConfig;

AppsyncSourceApiAssociationSourceApiAssociationConfig.builder()
//  .mergeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType">mergeType</a></code> | <code>java.lang.String</code> | Configuration of the merged behavior for the association. |

---

##### `mergeType`<sup>Optional</sup> <a name="mergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig.property.mergeType"></a>

```java
public java.lang.String getMergeType();
```

- *Type:* java.lang.String

Configuration of the merged behavior for the association.

For example when it could be auto or has to be manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_source_api_association.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference;

new AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType">resetMergeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMergeType` <a name="resetMergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resetMergeType"></a>

```java
public void resetMergeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput">mergeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">mergeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mergeTypeInput`<sup>Optional</sup> <a name="mergeTypeInput" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeTypeInput"></a>

```java
public java.lang.String getMergeTypeInput();
```

- *Type:* java.lang.String

---

##### `mergeType`<sup>Required</sup> <a name="mergeType" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```java
public java.lang.String getMergeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncSourceApiAssociationSourceApiAssociationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncSourceApiAssociation.AppsyncSourceApiAssociationSourceApiAssociationConfig">AppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



