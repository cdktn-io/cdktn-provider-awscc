# `datazoneProject` Submodule <a name="`datazoneProject` Submodule" id="@cdktn/provider-awscc.datazoneProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProject <a name="DatazoneProject" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project awscc_datazone_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProject;

DatazoneProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .domainUnitId(java.lang.String)
//  .glossaryTerms(java.util.List<java.lang.String>)
//  .membershipAssignments(IResolvable|java.util.List<DatazoneProjectMembershipAssignments>)
//  .projectCategory(java.lang.String)
//  .projectExecutionRole(java.lang.String)
//  .projectProfileId(java.lang.String)
//  .projectProfileVersion(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<DatazoneProjectResourceTags>)
//  .userParameters(IResolvable|java.util.List<DatazoneProjectUserParameters>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone domain in which this project is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | The ID of the domain unit. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | The glossary terms that can be used in this Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.membershipAssignments">membershipAssignments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>></code> | The project membership assignments. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectCategory">projectCategory</a></code> | <code>java.lang.String</code> | The project category. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectExecutionRole">projectExecutionRole</a></code> | <code>java.lang.String</code> | The project execution role ARN. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileId">projectProfileId</a></code> | <code>java.lang.String</code> | The project profile ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileVersion">projectProfileVersion</a></code> | <code>java.lang.String</code> | The project profile version to which the project should be updated. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>></code> | The resource tags of the project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.userParameters">userParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>></code> | The user parameters of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The ID of the Amazon DataZone domain in which this project is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#description DatazoneProject#description}

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainUnitId"></a>

- *Type:* java.lang.String

The ID of the domain unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.glossaryTerms"></a>

- *Type:* java.util.List<java.lang.String>

The glossary terms that can be used in this Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}

---

##### `membershipAssignments`<sup>Optional</sup> <a name="membershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.membershipAssignments"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>>

The project membership assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}

---

##### `projectCategory`<sup>Optional</sup> <a name="projectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectCategory"></a>

- *Type:* java.lang.String

The project category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}

---

##### `projectExecutionRole`<sup>Optional</sup> <a name="projectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectExecutionRole"></a>

- *Type:* java.lang.String

The project execution role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}

---

##### `projectProfileId`<sup>Optional</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileId"></a>

- *Type:* java.lang.String

The project profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}

---

##### `projectProfileVersion`<sup>Optional</sup> <a name="projectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileVersion"></a>

- *Type:* java.lang.String

The project profile version to which the project should be updated.

You can only specify the following string for this parameter: latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.resourceTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>>

The resource tags of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.userParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>>

The user parameters of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments">putMembershipAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters">putUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments">resetMembershipAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory">resetProjectCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole">resetProjectExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId">resetProjectProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion">resetProjectProfileVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters">resetUserParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMembershipAssignments` <a name="putMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments"></a>

```java
public void putMembershipAssignments(IResolvable|java.util.List<DatazoneProjectMembershipAssignments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>>

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags"></a>

```java
public void putResourceTags(IResolvable|java.util.List<DatazoneProjectResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>>

---

##### `putUserParameters` <a name="putUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters"></a>

```java
public void putUserParameters(IResolvable|java.util.List<DatazoneProjectUserParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId"></a>

```java
public void resetDomainUnitId()
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms"></a>

```java
public void resetGlossaryTerms()
```

##### `resetMembershipAssignments` <a name="resetMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments"></a>

```java
public void resetMembershipAssignments()
```

##### `resetProjectCategory` <a name="resetProjectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory"></a>

```java
public void resetProjectCategory()
```

##### `resetProjectExecutionRole` <a name="resetProjectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole"></a>

```java
public void resetProjectExecutionRole()
```

##### `resetProjectProfileId` <a name="resetProjectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId"></a>

```java
public void resetProjectProfileId()
```

##### `resetProjectProfileVersion` <a name="resetProjectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion"></a>

```java
public void resetProjectProfileVersion()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetUserParameters` <a name="resetUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters"></a>

```java
public void resetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProject;

DatazoneProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProject;

DatazoneProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProject;

DatazoneProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProject;

DatazoneProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments">membershipAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus">projectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters">userParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput">membershipAssignmentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput">projectCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput">projectExecutionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput">projectProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput">projectProfileVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput">resourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput">userParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory">projectCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole">projectExecutionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId">projectProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion">projectProfileVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `membershipAssignments`<sup>Required</sup> <a name="membershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments"></a>

```java
public DatazoneProjectMembershipAssignmentsList getMembershipAssignments();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `projectStatus`<sup>Required</sup> <a name="projectStatus" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus"></a>

```java
public java.lang.String getProjectStatus();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags"></a>

```java
public DatazoneProjectResourceTagsList getResourceTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a>

---

##### `userParameters`<sup>Required</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters"></a>

```java
public DatazoneProjectUserParametersList getUserParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput"></a>

```java
public java.lang.String getDomainUnitIdInput();
```

- *Type:* java.lang.String

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput"></a>

```java
public java.util.List<java.lang.String> getGlossaryTermsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membershipAssignmentsInput`<sup>Optional</sup> <a name="membershipAssignmentsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput"></a>

```java
public IResolvable|java.util.List<DatazoneProjectMembershipAssignments> getMembershipAssignmentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectCategoryInput`<sup>Optional</sup> <a name="projectCategoryInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput"></a>

```java
public java.lang.String getProjectCategoryInput();
```

- *Type:* java.lang.String

---

##### `projectExecutionRoleInput`<sup>Optional</sup> <a name="projectExecutionRoleInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput"></a>

```java
public java.lang.String getProjectExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `projectProfileIdInput`<sup>Optional</sup> <a name="projectProfileIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput"></a>

```java
public java.lang.String getProjectProfileIdInput();
```

- *Type:* java.lang.String

---

##### `projectProfileVersionInput`<sup>Optional</sup> <a name="projectProfileVersionInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput"></a>

```java
public java.lang.String getProjectProfileVersionInput();
```

- *Type:* java.lang.String

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput"></a>

```java
public IResolvable|java.util.List<DatazoneProjectResourceTags> getResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>>

---

##### `userParametersInput`<sup>Optional</sup> <a name="userParametersInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParameters> getUserParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms"></a>

```java
public java.util.List<java.lang.String> getGlossaryTerms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectCategory`<sup>Required</sup> <a name="projectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory"></a>

```java
public java.lang.String getProjectCategory();
```

- *Type:* java.lang.String

---

##### `projectExecutionRole`<sup>Required</sup> <a name="projectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole"></a>

```java
public java.lang.String getProjectExecutionRole();
```

- *Type:* java.lang.String

---

##### `projectProfileId`<sup>Required</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId"></a>

```java
public java.lang.String getProjectProfileId();
```

- *Type:* java.lang.String

---

##### `projectProfileVersion`<sup>Required</sup> <a name="projectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion"></a>

```java
public java.lang.String getProjectProfileVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectConfig <a name="DatazoneProjectConfig" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectConfig;

DatazoneProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .domainUnitId(java.lang.String)
//  .glossaryTerms(java.util.List<java.lang.String>)
//  .membershipAssignments(IResolvable|java.util.List<DatazoneProjectMembershipAssignments>)
//  .projectCategory(java.lang.String)
//  .projectExecutionRole(java.lang.String)
//  .projectProfileId(java.lang.String)
//  .projectProfileVersion(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<DatazoneProjectResourceTags>)
//  .userParameters(IResolvable|java.util.List<DatazoneProjectUserParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone domain in which this project is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | The ID of the domain unit. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | The glossary terms that can be used in this Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments">membershipAssignments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>></code> | The project membership assignments. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory">projectCategory</a></code> | <code>java.lang.String</code> | The project category. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole">projectExecutionRole</a></code> | <code>java.lang.String</code> | The project execution role ARN. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId">projectProfileId</a></code> | <code>java.lang.String</code> | The project profile ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion">projectProfileVersion</a></code> | <code>java.lang.String</code> | The project profile version to which the project should be updated. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>></code> | The resource tags of the project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters">userParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>></code> | The user parameters of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The ID of the Amazon DataZone domain in which this project is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#description DatazoneProject#description}

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

The ID of the domain unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms"></a>

```java
public java.util.List<java.lang.String> getGlossaryTerms();
```

- *Type:* java.util.List<java.lang.String>

The glossary terms that can be used in this Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}

---

##### `membershipAssignments`<sup>Optional</sup> <a name="membershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments"></a>

```java
public IResolvable|java.util.List<DatazoneProjectMembershipAssignments> getMembershipAssignments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>>

The project membership assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}

---

##### `projectCategory`<sup>Optional</sup> <a name="projectCategory" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory"></a>

```java
public java.lang.String getProjectCategory();
```

- *Type:* java.lang.String

The project category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}

---

##### `projectExecutionRole`<sup>Optional</sup> <a name="projectExecutionRole" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole"></a>

```java
public java.lang.String getProjectExecutionRole();
```

- *Type:* java.lang.String

The project execution role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}

---

##### `projectProfileId`<sup>Optional</sup> <a name="projectProfileId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId"></a>

```java
public java.lang.String getProjectProfileId();
```

- *Type:* java.lang.String

The project profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}

---

##### `projectProfileVersion`<sup>Optional</sup> <a name="projectProfileVersion" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion"></a>

```java
public java.lang.String getProjectProfileVersion();
```

- *Type:* java.lang.String

The project profile version to which the project should be updated.

You can only specify the following string for this parameter: latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags"></a>

```java
public IResolvable|java.util.List<DatazoneProjectResourceTags> getResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>>

The resource tags of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParameters> getUserParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>>

The user parameters of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}

---

### DatazoneProjectMembershipAssignments <a name="DatazoneProjectMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectMembershipAssignments;

DatazoneProjectMembershipAssignments.builder()
//  .designation(java.lang.String)
//  .member(DatazoneProjectMembershipAssignmentsMember)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation">designation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#designation DatazoneProject#designation}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | The member of the project. |

---

##### `designation`<sup>Optional</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation"></a>

```java
public java.lang.String getDesignation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#designation DatazoneProject#designation}.

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member"></a>

```java
public DatazoneProjectMembershipAssignmentsMember getMember();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

The member of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#member DatazoneProject#member}

---

### DatazoneProjectMembershipAssignmentsMember <a name="DatazoneProjectMembershipAssignmentsMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectMembershipAssignmentsMember;

DatazoneProjectMembershipAssignmentsMember.builder()
//  .groupIdentifier(java.lang.String)
//  .userIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier">userIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}. |

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}.

---

##### `userIdentifier`<sup>Optional</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier"></a>

```java
public java.lang.String getUserIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}.

---

### DatazoneProjectResourceTags <a name="DatazoneProjectResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectResourceTags;

DatazoneProjectResourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#key DatazoneProject#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#key DatazoneProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

### DatazoneProjectUserParameters <a name="DatazoneProjectUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParameters;

DatazoneProjectUserParameters.builder()
//  .environmentConfigurationName(java.lang.String)
//  .environmentId(java.lang.String)
//  .environmentParameters(IResolvable|java.util.List<DatazoneProjectUserParametersEnvironmentParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName">environmentConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters">environmentParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}. |

---

##### `environmentConfigurationName`<sup>Optional</sup> <a name="environmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName"></a>

```java
public java.lang.String getEnvironmentConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}.

---

##### `environmentParameters`<sup>Optional</sup> <a name="environmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParametersEnvironmentParameters> getEnvironmentParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}.

---

### DatazoneProjectUserParametersEnvironmentParameters <a name="DatazoneProjectUserParametersEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParametersEnvironmentParameters;

DatazoneProjectUserParametersEnvironmentParameters.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#name DatazoneProject#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectMembershipAssignmentsList <a name="DatazoneProjectMembershipAssignmentsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectMembershipAssignmentsList;

new DatazoneProjectMembershipAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get"></a>

```java
public DatazoneProjectMembershipAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneProjectMembershipAssignments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>>

---


### DatazoneProjectMembershipAssignmentsMemberOutputReference <a name="DatazoneProjectMembershipAssignmentsMemberOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectMembershipAssignmentsMemberOutputReference;

new DatazoneProjectMembershipAssignmentsMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier">resetUserIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier"></a>

```java
public void resetGroupIdentifier()
```

##### `resetUserIdentifier` <a name="resetUserIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier"></a>

```java
public void resetUserIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput">userIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier">userIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput"></a>

```java
public java.lang.String getGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `userIdentifierInput`<sup>Optional</sup> <a name="userIdentifierInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput"></a>

```java
public java.lang.String getUserIdentifierInput();
```

- *Type:* java.lang.String

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier"></a>

```java
public java.lang.String getUserIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneProjectMembershipAssignmentsMember getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---


### DatazoneProjectMembershipAssignmentsOutputReference <a name="DatazoneProjectMembershipAssignmentsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectMembershipAssignmentsOutputReference;

new DatazoneProjectMembershipAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember">putMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation">resetDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember">resetMember</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMember` <a name="putMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember"></a>

```java
public void putMember(DatazoneProjectMembershipAssignmentsMember value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---

##### `resetDesignation` <a name="resetDesignation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation"></a>

```java
public void resetDesignation()
```

##### `resetMember` <a name="resetMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember"></a>

```java
public void resetMember()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput">designationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput">memberInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation">designation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member"></a>

```java
public DatazoneProjectMembershipAssignmentsMemberOutputReference getMember();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a>

---

##### `designationInput`<sup>Optional</sup> <a name="designationInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput"></a>

```java
public java.lang.String getDesignationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput"></a>

```java
public IResolvable|DatazoneProjectMembershipAssignmentsMember getMemberInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---

##### `designation`<sup>Required</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation"></a>

```java
public java.lang.String getDesignation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneProjectMembershipAssignments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>

---


### DatazoneProjectResourceTagsList <a name="DatazoneProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectResourceTagsList;

new DatazoneProjectResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get"></a>

```java
public DatazoneProjectResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneProjectResourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>>

---


### DatazoneProjectResourceTagsOutputReference <a name="DatazoneProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectResourceTagsOutputReference;

new DatazoneProjectResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneProjectResourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>

---


### DatazoneProjectUserParametersEnvironmentParametersList <a name="DatazoneProjectUserParametersEnvironmentParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParametersEnvironmentParametersList;

new DatazoneProjectUserParametersEnvironmentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get"></a>

```java
public DatazoneProjectUserParametersEnvironmentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParametersEnvironmentParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>>

---


### DatazoneProjectUserParametersEnvironmentParametersOutputReference <a name="DatazoneProjectUserParametersEnvironmentParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParametersEnvironmentParametersOutputReference;

new DatazoneProjectUserParametersEnvironmentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneProjectUserParametersEnvironmentParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>

---


### DatazoneProjectUserParametersList <a name="DatazoneProjectUserParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParametersList;

new DatazoneProjectUserParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get"></a>

```java
public DatazoneProjectUserParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>>

---


### DatazoneProjectUserParametersOutputReference <a name="DatazoneProjectUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_project.DatazoneProjectUserParametersOutputReference;

new DatazoneProjectUserParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters">putEnvironmentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName">resetEnvironmentConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters">resetEnvironmentParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentParameters` <a name="putEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters"></a>

```java
public void putEnvironmentParameters(IResolvable|java.util.List<DatazoneProjectUserParametersEnvironmentParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>>

---

##### `resetEnvironmentConfigurationName` <a name="resetEnvironmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName"></a>

```java
public void resetEnvironmentConfigurationName()
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetEnvironmentParameters` <a name="resetEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters"></a>

```java
public void resetEnvironmentParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters">environmentParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput">environmentConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput">environmentParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName">environmentConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentParameters`<sup>Required</sup> <a name="environmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters"></a>

```java
public DatazoneProjectUserParametersEnvironmentParametersList getEnvironmentParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a>

---

##### `environmentConfigurationNameInput`<sup>Optional</sup> <a name="environmentConfigurationNameInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput"></a>

```java
public java.lang.String getEnvironmentConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `environmentParametersInput`<sup>Optional</sup> <a name="environmentParametersInput" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput"></a>

```java
public IResolvable|java.util.List<DatazoneProjectUserParametersEnvironmentParameters> getEnvironmentParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>>

---

##### `environmentConfigurationName`<sup>Required</sup> <a name="environmentConfigurationName" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName"></a>

```java
public java.lang.String getEnvironmentConfigurationName();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneProjectUserParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>

---



