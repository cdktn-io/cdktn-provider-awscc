# `datazoneEnvironment` Submodule <a name="`datazoneEnvironment` Submodule" id="@cdktn/provider-awscc.datazoneEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironment <a name="DatazoneEnvironment" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment awscc_datazone_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironment;

DatazoneEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
    .projectIdentifier(java.lang.String)
//  .deploymentOrder(java.lang.Number)
//  .description(java.lang.String)
//  .environmentAccountIdentifier(java.lang.String)
//  .environmentAccountRegion(java.lang.String)
//  .environmentBlueprintIdentifier(java.lang.String)
//  .environmentConfigurationId(java.lang.String)
//  .environmentProfileIdentifier(java.lang.String)
//  .environmentRoleArn(java.lang.String)
//  .glossaryTerms(java.util.List<java.lang.String>)
//  .userParameters(IResolvable|java.util.List<DatazoneEnvironmentUserParameters>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.deploymentOrder">deploymentOrder</a></code> | <code>java.lang.Number</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountIdentifier">environmentAccountIdentifier</a></code> | <code>java.lang.String</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountRegion">environmentAccountRegion</a></code> | <code>java.lang.String</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentConfigurationId">environmentConfigurationId</a></code> | <code>java.lang.String</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentProfileIdentifier">environmentProfileIdentifier</a></code> | <code>java.lang.String</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentRoleArn">environmentRoleArn</a></code> | <code>java.lang.String</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.userParameters">userParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>></code> | The user parameters of the Amazon DataZone environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.projectIdentifier"></a>

- *Type:* java.lang.String

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `deploymentOrder`<sup>Optional</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.deploymentOrder"></a>

- *Type:* java.lang.Number

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `environmentAccountIdentifier`<sup>Optional</sup> <a name="environmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountIdentifier"></a>

- *Type:* java.lang.String

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `environmentAccountRegion`<sup>Optional</sup> <a name="environmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountRegion"></a>

- *Type:* java.lang.String

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `environmentBlueprintIdentifier`<sup>Optional</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentBlueprintIdentifier"></a>

- *Type:* java.lang.String

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `environmentConfigurationId`<sup>Optional</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentConfigurationId"></a>

- *Type:* java.lang.String

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `environmentProfileIdentifier`<sup>Optional</sup> <a name="environmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentProfileIdentifier"></a>

- *Type:* java.lang.String

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `environmentRoleArn`<sup>Optional</sup> <a name="environmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentRoleArn"></a>

- *Type:* java.lang.String

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.glossaryTerms"></a>

- *Type:* java.util.List<java.lang.String>

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.userParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>>

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters">putUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder">resetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier">resetEnvironmentAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion">resetEnvironmentAccountRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier">resetEnvironmentBlueprintIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId">resetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier">resetEnvironmentProfileIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn">resetEnvironmentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters">resetUserParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserParameters` <a name="putUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters"></a>

```java
public void putUserParameters(IResolvable|java.util.List<DatazoneEnvironmentUserParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>>

---

##### `resetDeploymentOrder` <a name="resetDeploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder"></a>

```java
public void resetDeploymentOrder()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentAccountIdentifier` <a name="resetEnvironmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier"></a>

```java
public void resetEnvironmentAccountIdentifier()
```

##### `resetEnvironmentAccountRegion` <a name="resetEnvironmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion"></a>

```java
public void resetEnvironmentAccountRegion()
```

##### `resetEnvironmentBlueprintIdentifier` <a name="resetEnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier"></a>

```java
public void resetEnvironmentBlueprintIdentifier()
```

##### `resetEnvironmentConfigurationId` <a name="resetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId"></a>

```java
public void resetEnvironmentConfigurationId()
```

##### `resetEnvironmentProfileIdentifier` <a name="resetEnvironmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier"></a>

```java
public void resetEnvironmentProfileIdentifier()
```

##### `resetEnvironmentRoleArn` <a name="resetEnvironmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn"></a>

```java
public void resetEnvironmentRoleArn()
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms"></a>

```java
public void resetGlossaryTerms()
```

##### `resetUserParameters` <a name="resetUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters"></a>

```java
public void resetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironment;

DatazoneEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironment;

DatazoneEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironment;

DatazoneEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironment;

DatazoneEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion">awsAccountRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId">environmentProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters">userParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput">deploymentOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput">environmentAccountIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput">environmentAccountRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput">environmentBlueprintIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput">environmentConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput">environmentProfileIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput">environmentRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput">userParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder">deploymentOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier">environmentAccountIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion">environmentAccountRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier">environmentProfileIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn">environmentRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion"></a>

```java
public java.lang.String getAwsAccountRegion();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId"></a>

```java
public java.lang.String getEnvironmentBlueprintId();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `environmentProfileId`<sup>Required</sup> <a name="environmentProfileId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId"></a>

```java
public java.lang.String getEnvironmentProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `userParameters`<sup>Required</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters"></a>

```java
public DatazoneEnvironmentUserParametersList getUserParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a>

---

##### `deploymentOrderInput`<sup>Optional</sup> <a name="deploymentOrderInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput"></a>

```java
public java.lang.Number getDeploymentOrderInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentAccountIdentifierInput`<sup>Optional</sup> <a name="environmentAccountIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput"></a>

```java
public java.lang.String getEnvironmentAccountIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentAccountRegionInput`<sup>Optional</sup> <a name="environmentAccountRegionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput"></a>

```java
public java.lang.String getEnvironmentAccountRegionInput();
```

- *Type:* java.lang.String

---

##### `environmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="environmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentConfigurationIdInput`<sup>Optional</sup> <a name="environmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput"></a>

```java
public java.lang.String getEnvironmentConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `environmentProfileIdentifierInput`<sup>Optional</sup> <a name="environmentProfileIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput"></a>

```java
public java.lang.String getEnvironmentProfileIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentRoleArnInput`<sup>Optional</sup> <a name="environmentRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput"></a>

```java
public java.lang.String getEnvironmentRoleArnInput();
```

- *Type:* java.lang.String

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput"></a>

```java
public java.util.List<java.lang.String> getGlossaryTermsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput"></a>

```java
public java.lang.String getProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `userParametersInput`<sup>Optional</sup> <a name="userParametersInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput"></a>

```java
public IResolvable|java.util.List<DatazoneEnvironmentUserParameters> getUserParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>>

---

##### `deploymentOrder`<sup>Required</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder"></a>

```java
public java.lang.Number getDeploymentOrder();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentAccountIdentifier`<sup>Required</sup> <a name="environmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier"></a>

```java
public java.lang.String getEnvironmentAccountIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentAccountRegion`<sup>Required</sup> <a name="environmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion"></a>

```java
public java.lang.String getEnvironmentAccountRegion();
```

- *Type:* java.lang.String

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentConfigurationId`<sup>Required</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId"></a>

```java
public java.lang.String getEnvironmentConfigurationId();
```

- *Type:* java.lang.String

---

##### `environmentProfileIdentifier`<sup>Required</sup> <a name="environmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier"></a>

```java
public java.lang.String getEnvironmentProfileIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentRoleArn`<sup>Required</sup> <a name="environmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn"></a>

```java
public java.lang.String getEnvironmentRoleArn();
```

- *Type:* java.lang.String

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms"></a>

```java
public java.util.List<java.lang.String> getGlossaryTerms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentConfig <a name="DatazoneEnvironmentConfig" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironmentConfig;

DatazoneEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
    .projectIdentifier(java.lang.String)
//  .deploymentOrder(java.lang.Number)
//  .description(java.lang.String)
//  .environmentAccountIdentifier(java.lang.String)
//  .environmentAccountRegion(java.lang.String)
//  .environmentBlueprintIdentifier(java.lang.String)
//  .environmentConfigurationId(java.lang.String)
//  .environmentProfileIdentifier(java.lang.String)
//  .environmentRoleArn(java.lang.String)
//  .glossaryTerms(java.util.List<java.lang.String>)
//  .userParameters(IResolvable|java.util.List<DatazoneEnvironmentUserParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder">deploymentOrder</a></code> | <code>java.lang.Number</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier">environmentAccountIdentifier</a></code> | <code>java.lang.String</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion">environmentAccountRegion</a></code> | <code>java.lang.String</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>java.lang.String</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier">environmentProfileIdentifier</a></code> | <code>java.lang.String</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn">environmentRoleArn</a></code> | <code>java.lang.String</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms">glossaryTerms</a></code> | <code>java.util.List<java.lang.String></code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters">userParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>></code> | The user parameters of the Amazon DataZone environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `deploymentOrder`<sup>Optional</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder"></a>

```java
public java.lang.Number getDeploymentOrder();
```

- *Type:* java.lang.Number

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `environmentAccountIdentifier`<sup>Optional</sup> <a name="environmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier"></a>

```java
public java.lang.String getEnvironmentAccountIdentifier();
```

- *Type:* java.lang.String

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `environmentAccountRegion`<sup>Optional</sup> <a name="environmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion"></a>

```java
public java.lang.String getEnvironmentAccountRegion();
```

- *Type:* java.lang.String

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `environmentBlueprintIdentifier`<sup>Optional</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifier();
```

- *Type:* java.lang.String

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `environmentConfigurationId`<sup>Optional</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId"></a>

```java
public java.lang.String getEnvironmentConfigurationId();
```

- *Type:* java.lang.String

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `environmentProfileIdentifier`<sup>Optional</sup> <a name="environmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier"></a>

```java
public java.lang.String getEnvironmentProfileIdentifier();
```

- *Type:* java.lang.String

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `environmentRoleArn`<sup>Optional</sup> <a name="environmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn"></a>

```java
public java.lang.String getEnvironmentRoleArn();
```

- *Type:* java.lang.String

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms"></a>

```java
public java.util.List<java.lang.String> getGlossaryTerms();
```

- *Type:* java.util.List<java.lang.String>

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters"></a>

```java
public IResolvable|java.util.List<DatazoneEnvironmentUserParameters> getUserParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>>

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

### DatazoneEnvironmentUserParameters <a name="DatazoneEnvironmentUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironmentUserParameters;

DatazoneEnvironmentUserParameters.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name">name</a></code> | <code>java.lang.String</code> | The name of an environment parameter. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value">value</a></code> | <code>java.lang.String</code> | The value of an environment parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentUserParametersList <a name="DatazoneEnvironmentUserParametersList" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironmentUserParametersList;

new DatazoneEnvironmentUserParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get"></a>

```java
public DatazoneEnvironmentUserParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneEnvironmentUserParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>>

---


### DatazoneEnvironmentUserParametersOutputReference <a name="DatazoneEnvironmentUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment.DatazoneEnvironmentUserParametersOutputReference;

new DatazoneEnvironmentUserParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneEnvironmentUserParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>

---



