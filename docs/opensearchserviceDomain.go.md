# `opensearchserviceDomain` Submodule <a name="`opensearchserviceDomain` Submodule" id="@cdktn/provider-awscc.opensearchserviceDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceDomain <a name="OpensearchserviceDomain" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomain(scope Construct, id *string, config OpensearchserviceDomainConfig) OpensearchserviceDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig">OpensearchserviceDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig">OpensearchserviceDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions">PutAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions">PutAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions">PutAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions">PutCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions">PutDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions">PutDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions">PutEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions">PutEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions">PutIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions">PutLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions">PutNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions">PutOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions">PutSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions">PutSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies">ResetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions">ResetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions">ResetAimlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions">ResetAutomatedSnapshotPauseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions">ResetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions">ResetDeploymentStrategyOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions">ResetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions">ResetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions">ResetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode">ResetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions">ResetIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions">ResetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions">ResetNodeToNodeEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions">ResetOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait">ResetSkipShardMigrationWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions">ResetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions">ResetSoftwareUpdateOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase">ResetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions">ResetVpcOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSecurityOptions` <a name="PutAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions"></a>

```go
func PutAdvancedSecurityOptions(value OpensearchserviceDomainAdvancedSecurityOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

---

##### `PutAimlOptions` <a name="PutAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions"></a>

```go
func PutAimlOptions(value OpensearchserviceDomainAimlOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAimlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

---

##### `PutAutomatedSnapshotPauseOptions` <a name="PutAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions"></a>

```go
func PutAutomatedSnapshotPauseOptions(value OpensearchserviceDomainAutomatedSnapshotPauseOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putAutomatedSnapshotPauseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

---

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig"></a>

```go
func PutClusterConfig(value OpensearchserviceDomainClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

---

##### `PutCognitoOptions` <a name="PutCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions"></a>

```go
func PutCognitoOptions(value OpensearchserviceDomainCognitoOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

---

##### `PutDeploymentStrategyOptions` <a name="PutDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions"></a>

```go
func PutDeploymentStrategyOptions(value OpensearchserviceDomainDeploymentStrategyOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDeploymentStrategyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

---

##### `PutDomainEndpointOptions` <a name="PutDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions"></a>

```go
func PutDomainEndpointOptions(value OpensearchserviceDomainDomainEndpointOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

---

##### `PutEbsOptions` <a name="PutEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions"></a>

```go
func PutEbsOptions(value OpensearchserviceDomainEbsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

---

##### `PutEncryptionAtRestOptions` <a name="PutEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions"></a>

```go
func PutEncryptionAtRestOptions(value OpensearchserviceDomainEncryptionAtRestOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

---

##### `PutIdentityCenterOptions` <a name="PutIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions"></a>

```go
func PutIdentityCenterOptions(value OpensearchserviceDomainIdentityCenterOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

---

##### `PutLogPublishingOptions` <a name="PutLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions"></a>

```go
func PutLogPublishingOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeToNodeEncryptionOptions` <a name="PutNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions"></a>

```go
func PutNodeToNodeEncryptionOptions(value OpensearchserviceDomainNodeToNodeEncryptionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putNodeToNodeEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

---

##### `PutOffPeakWindowOptions` <a name="PutOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions"></a>

```go
func PutOffPeakWindowOptions(value OpensearchserviceDomainOffPeakWindowOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putOffPeakWindowOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

---

##### `PutSnapshotOptions` <a name="PutSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions"></a>

```go
func PutSnapshotOptions(value OpensearchserviceDomainSnapshotOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

---

##### `PutSoftwareUpdateOptions` <a name="PutSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions"></a>

```go
func PutSoftwareUpdateOptions(value OpensearchserviceDomainSoftwareUpdateOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putSoftwareUpdateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions"></a>

```go
func PutVpcOptions(value OpensearchserviceDomainVpcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

---

##### `ResetAccessPolicies` <a name="ResetAccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAccessPolicies"></a>

```go
func ResetAccessPolicies()
```

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedOptions"></a>

```go
func ResetAdvancedOptions()
```

##### `ResetAdvancedSecurityOptions` <a name="ResetAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAdvancedSecurityOptions"></a>

```go
func ResetAdvancedSecurityOptions()
```

##### `ResetAimlOptions` <a name="ResetAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAimlOptions"></a>

```go
func ResetAimlOptions()
```

##### `ResetAutomatedSnapshotPauseOptions` <a name="ResetAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetAutomatedSnapshotPauseOptions"></a>

```go
func ResetAutomatedSnapshotPauseOptions()
```

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetClusterConfig"></a>

```go
func ResetClusterConfig()
```

##### `ResetCognitoOptions` <a name="ResetCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetCognitoOptions"></a>

```go
func ResetCognitoOptions()
```

##### `ResetDeploymentStrategyOptions` <a name="ResetDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDeploymentStrategyOptions"></a>

```go
func ResetDeploymentStrategyOptions()
```

##### `ResetDomainEndpointOptions` <a name="ResetDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainEndpointOptions"></a>

```go
func ResetDomainEndpointOptions()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetEbsOptions` <a name="ResetEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEbsOptions"></a>

```go
func ResetEbsOptions()
```

##### `ResetEncryptionAtRestOptions` <a name="ResetEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEncryptionAtRestOptions"></a>

```go
func ResetEncryptionAtRestOptions()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineMode"></a>

```go
func ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetIdentityCenterOptions` <a name="ResetIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIdentityCenterOptions"></a>

```go
func ResetIdentityCenterOptions()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetLogPublishingOptions` <a name="ResetLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetLogPublishingOptions"></a>

```go
func ResetLogPublishingOptions()
```

##### `ResetNodeToNodeEncryptionOptions` <a name="ResetNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetNodeToNodeEncryptionOptions"></a>

```go
func ResetNodeToNodeEncryptionOptions()
```

##### `ResetOffPeakWindowOptions` <a name="ResetOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetOffPeakWindowOptions"></a>

```go
func ResetOffPeakWindowOptions()
```

##### `ResetSkipShardMigrationWait` <a name="ResetSkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSkipShardMigrationWait"></a>

```go
func ResetSkipShardMigrationWait()
```

##### `ResetSnapshotOptions` <a name="ResetSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSnapshotOptions"></a>

```go
func ResetSnapshotOptions()
```

##### `ResetSoftwareUpdateOptions` <a name="ResetSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetSoftwareUpdateOptions"></a>

```go
func ResetSoftwareUpdateOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUseCase` <a name="ResetUseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetUseCase"></a>

```go
func ResetUseCase()
```

##### `ResetVpcOptions` <a name="ResetVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.resetVpcOptions"></a>

```go
func ResetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.OpensearchserviceDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.OpensearchserviceDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.OpensearchserviceDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.OpensearchserviceDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchserviceDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchserviceDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions">AimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions">AutomatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions">DeploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn">DomainArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint">DomainEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints">DomainEndpoints</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2">DomainEndpointV2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions">IdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions">ServiceSoftwareOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput">AccessPoliciesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput">AdvancedSecurityOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput">AimlOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput">AutomatedSnapshotPauseOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput">CognitoOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput">DeploymentStrategyOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput">DomainEndpointOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput">EbsOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput">EncryptionAtRestOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput">EngineModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput">IdentityCenterOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput">LogPublishingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput">NodeToNodeEncryptionOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput">OffPeakWindowOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput">SkipShardMigrationWaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput">SnapshotOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput">SoftwareUpdateOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput">UseCaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies">AccessPolicies</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode">EngineMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait">SkipShardMigrationWait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase">UseCase</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptions"></a>

```go
func AdvancedSecurityOptions() OpensearchserviceDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `AimlOptions`<sup>Required</sup> <a name="AimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptions"></a>

```go
func AimlOptions() OpensearchserviceDomainAimlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference">OpensearchserviceDomainAimlOptionsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotPauseOptions`<sup>Required</sup> <a name="AutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptions"></a>

```go
func AutomatedSnapshotPauseOptions() OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference">OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfig"></a>

```go
func ClusterConfig() OpensearchserviceDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference">OpensearchserviceDomainClusterConfigOutputReference</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptions"></a>

```go
func CognitoOptions() OpensearchserviceDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference">OpensearchserviceDomainCognitoOptionsOutputReference</a>

---

##### `DeploymentStrategyOptions`<sup>Required</sup> <a name="DeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptions"></a>

```go
func DeploymentStrategyOptions() OpensearchserviceDomainDeploymentStrategyOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference">OpensearchserviceDomainDeploymentStrategyOptionsOutputReference</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainArn"></a>

```go
func DomainArn() *string
```

- *Type:* *string

---

##### `DomainEndpoint`<sup>Required</sup> <a name="DomainEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoint"></a>

```go
func DomainEndpoint() *string
```

- *Type:* *string

---

##### `DomainEndpointOptions`<sup>Required</sup> <a name="DomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptions"></a>

```go
func DomainEndpointOptions() OpensearchserviceDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference">OpensearchserviceDomainDomainEndpointOptionsOutputReference</a>

---

##### `DomainEndpoints`<sup>Required</sup> <a name="DomainEndpoints" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpoints"></a>

```go
func DomainEndpoints() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DomainEndpointV2`<sup>Required</sup> <a name="DomainEndpointV2" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointV2"></a>

```go
func DomainEndpointV2() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptions"></a>

```go
func EbsOptions() OpensearchserviceDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference">OpensearchserviceDomainEbsOptionsOutputReference</a>

---

##### `EncryptionAtRestOptions`<sup>Required</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptions"></a>

```go
func EncryptionAtRestOptions() OpensearchserviceDomainEncryptionAtRestOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference">OpensearchserviceDomainEncryptionAtRestOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityCenterOptions`<sup>Required</sup> <a name="IdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptions"></a>

```go
func IdentityCenterOptions() OpensearchserviceDomainIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference">OpensearchserviceDomainIdentityCenterOptionsOutputReference</a>

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptions"></a>

```go
func LogPublishingOptions() OpensearchserviceDomainLogPublishingOptionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap">OpensearchserviceDomainLogPublishingOptionsMap</a>

---

##### `NodeToNodeEncryptionOptions`<sup>Required</sup> <a name="NodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptions"></a>

```go
func NodeToNodeEncryptionOptions() OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference">OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference</a>

---

##### `OffPeakWindowOptions`<sup>Required</sup> <a name="OffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptions"></a>

```go
func OffPeakWindowOptions() OpensearchserviceDomainOffPeakWindowOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOutputReference</a>

---

##### `ServiceSoftwareOptions`<sup>Required</sup> <a name="ServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.serviceSoftwareOptions"></a>

```go
func ServiceSoftwareOptions() OpensearchserviceDomainServiceSoftwareOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference">OpensearchserviceDomainServiceSoftwareOptionsOutputReference</a>

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptions"></a>

```go
func SnapshotOptions() OpensearchserviceDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference">OpensearchserviceDomainSnapshotOptionsOutputReference</a>

---

##### `SoftwareUpdateOptions`<sup>Required</sup> <a name="SoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptions"></a>

```go
func SoftwareUpdateOptions() OpensearchserviceDomainSoftwareUpdateOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference">OpensearchserviceDomainSoftwareUpdateOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tags"></a>

```go
func Tags() OpensearchserviceDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList">OpensearchserviceDomainTagsList</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptions"></a>

```go
func VpcOptions() OpensearchserviceDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference">OpensearchserviceDomainVpcOptionsOutputReference</a>

---

##### `AccessPoliciesInput`<sup>Optional</sup> <a name="AccessPoliciesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPoliciesInput"></a>

```go
func AccessPoliciesInput() *string
```

- *Type:* *string

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptionsInput"></a>

```go
func AdvancedOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdvancedSecurityOptionsInput`<sup>Optional</sup> <a name="AdvancedSecurityOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedSecurityOptionsInput"></a>

```go
func AdvancedSecurityOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AimlOptionsInput`<sup>Optional</sup> <a name="AimlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.aimlOptionsInput"></a>

```go
func AimlOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomatedSnapshotPauseOptionsInput`<sup>Optional</sup> <a name="AutomatedSnapshotPauseOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.automatedSnapshotPauseOptionsInput"></a>

```go
func AutomatedSnapshotPauseOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CognitoOptionsInput`<sup>Optional</sup> <a name="CognitoOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.cognitoOptionsInput"></a>

```go
func CognitoOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentStrategyOptionsInput`<sup>Optional</sup> <a name="DeploymentStrategyOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.deploymentStrategyOptionsInput"></a>

```go
func DeploymentStrategyOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainEndpointOptionsInput`<sup>Optional</sup> <a name="DomainEndpointOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainEndpointOptionsInput"></a>

```go
func DomainEndpointOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EbsOptionsInput`<sup>Optional</sup> <a name="EbsOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ebsOptionsInput"></a>

```go
func EbsOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionAtRestOptionsInput`<sup>Optional</sup> <a name="EncryptionAtRestOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.encryptionAtRestOptionsInput"></a>

```go
func EncryptionAtRestOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineModeInput"></a>

```go
func EngineModeInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdentityCenterOptionsInput`<sup>Optional</sup> <a name="IdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.identityCenterOptionsInput"></a>

```go
func IdentityCenterOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `LogPublishingOptionsInput`<sup>Optional</sup> <a name="LogPublishingOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.logPublishingOptionsInput"></a>

```go
func LogPublishingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NodeToNodeEncryptionOptionsInput`<sup>Optional</sup> <a name="NodeToNodeEncryptionOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.nodeToNodeEncryptionOptionsInput"></a>

```go
func NodeToNodeEncryptionOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `OffPeakWindowOptionsInput`<sup>Optional</sup> <a name="OffPeakWindowOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.offPeakWindowOptionsInput"></a>

```go
func OffPeakWindowOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipShardMigrationWaitInput`<sup>Optional</sup> <a name="SkipShardMigrationWaitInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWaitInput"></a>

```go
func SkipShardMigrationWaitInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotOptionsInput`<sup>Optional</sup> <a name="SnapshotOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.snapshotOptionsInput"></a>

```go
func SnapshotOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SoftwareUpdateOptionsInput`<sup>Optional</sup> <a name="SoftwareUpdateOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.softwareUpdateOptionsInput"></a>

```go
func SoftwareUpdateOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseCaseInput`<sup>Optional</sup> <a name="UseCaseInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCaseInput"></a>

```go
func UseCaseInput() *string
```

- *Type:* *string

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.vpcOptionsInput"></a>

```go
func VpcOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.accessPolicies"></a>

```go
func AccessPolicies() *string
```

- *Type:* *string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.advancedOptions"></a>

```go
func AdvancedOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineMode"></a>

```go
func EngineMode() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `SkipShardMigrationWait`<sup>Required</sup> <a name="SkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.skipShardMigrationWait"></a>

```go
func SkipShardMigrationWait() interface{}
```

- *Type:* interface{}

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.useCase"></a>

```go
func UseCase() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceDomainAdvancedSecurityOptions <a name="OpensearchserviceDomainAdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptions {
	AnonymousAuthEnabled: interface{},
	Enabled: interface{},
	IamFederationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions,
	InternalUserDatabaseEnabled: interface{},
	JwtOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions,
	MasterUserOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions,
	SamlOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions">JwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}. |

---

##### `AnonymousAuthEnabled`<sup>Optional</sup> <a name="AnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```go
AnonymousAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `IamFederationOptions`<sup>Optional</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.iamFederationOptions"></a>

```go
IamFederationOptions OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}.

---

##### `InternalUserDatabaseEnabled`<sup>Optional</sup> <a name="InternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```go
InternalUserDatabaseEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}.

---

##### `JwtOptions`<sup>Optional</sup> <a name="JwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.jwtOptions"></a>

```go
JwtOptions OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}.

---

##### `MasterUserOptions`<sup>Optional</sup> <a name="MasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```go
MasterUserOptions OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}.

---

##### `SamlOptions`<sup>Optional</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions.property.samlOptions"></a>

```go
SamlOptions OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions {
	Enabled: interface{},
	RolesKey: *string,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey">RolesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions {
	Enabled: interface{},
	PublicKey: *string,
	RolesKey: *string,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey">RolesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions {
	MasterUserArn: *string,
	MasterUserName: *string,
	MasterUserPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">MasterUserArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}. |

---

##### `MasterUserArn`<sup>Optional</sup> <a name="MasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```go
MasterUserArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```go
MasterUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions {
	Enabled: interface{},
	Idp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp,
	MasterBackendRole: *string,
	MasterUserName: *string,
	RolesKey: *string,
	SessionTimeoutMinutes: *f64,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp">Idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole">MasterBackendRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey">RolesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `Idp`<sup>Optional</sup> <a name="Idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.idp"></a>

```go
Idp OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}.

---

##### `MasterBackendRole`<sup>Optional</sup> <a name="MasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterBackendRole"></a>

```go
MasterBackendRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.masterUserName"></a>

```go
MasterUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```go
SessionTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}.

---

### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp {
	EntityId: *string,
	MetadataContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent">MetadataContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}.

---

##### `MetadataContent`<sup>Optional</sup> <a name="MetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp.property.metadataContent"></a>

```go
MetadataContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}.

---

### OpensearchserviceDomainAimlOptions <a name="OpensearchserviceDomainAimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAimlOptions {
	S3VectorsEngine: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine,
	ServerlessVectorAcceleration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine">S3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}. |

---

##### `S3VectorsEngine`<sup>Optional</sup> <a name="S3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.s3VectorsEngine"></a>

```go
S3VectorsEngine OpensearchserviceDomainAimlOptionsS3VectorsEngine
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}.

---

##### `ServerlessVectorAcceleration`<sup>Optional</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions.property.serverlessVectorAcceleration"></a>

```go
ServerlessVectorAcceleration OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}.

---

### OpensearchserviceDomainAimlOptionsS3VectorsEngine <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable S3 vectors engine. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable S3 vectors engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable serverless vector acceleration. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable serverless vector acceleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}

---

### OpensearchserviceDomainAutomatedSnapshotPauseOptions <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions {
	Enabled: interface{},
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}.

---

### OpensearchserviceDomainClusterConfig <a name="OpensearchserviceDomainClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainClusterConfig {
	ColdStorageOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions,
	DedicatedMasterCount: *f64,
	DedicatedMasterEnabled: interface{},
	DedicatedMasterType: *string,
	InstanceCount: *f64,
	InstanceType: *string,
	MultiAzWithStandbyEnabled: interface{},
	NodeOptions: interface{},
	WarmCount: *f64,
	WarmEnabled: interface{},
	WarmType: *string,
	ZoneAwarenessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig,
	ZoneAwarenessEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions">NodeOptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount">WarmCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled">WarmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType">WarmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}. |

---

##### `ColdStorageOptions`<sup>Optional</sup> <a name="ColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.coldStorageOptions"></a>

```go
ColdStorageOptions OpensearchserviceDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}.

---

##### `DedicatedMasterCount`<sup>Optional</sup> <a name="DedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterCount"></a>

```go
DedicatedMasterCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}.

---

##### `DedicatedMasterEnabled`<sup>Optional</sup> <a name="DedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```go
DedicatedMasterEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}.

---

##### `DedicatedMasterType`<sup>Optional</sup> <a name="DedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.dedicatedMasterType"></a>

```go
DedicatedMasterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}.

---

##### `MultiAzWithStandbyEnabled`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.multiAzWithStandbyEnabled"></a>

```go
MultiAzWithStandbyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}.

---

##### `NodeOptions`<sup>Optional</sup> <a name="NodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.nodeOptions"></a>

```go
NodeOptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}.

---

##### `WarmCount`<sup>Optional</sup> <a name="WarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmCount"></a>

```go
WarmCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}.

---

##### `WarmEnabled`<sup>Optional</sup> <a name="WarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmEnabled"></a>

```go
WarmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}.

---

##### `WarmType`<sup>Optional</sup> <a name="WarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.warmType"></a>

```go
WarmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}.

---

##### `ZoneAwarenessConfig`<sup>Optional</sup> <a name="ZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessConfig"></a>

```go
ZoneAwarenessConfig OpensearchserviceDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}.

---

##### `ZoneAwarenessEnabled`<sup>Optional</sup> <a name="ZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```go
ZoneAwarenessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}.

---

### OpensearchserviceDomainClusterConfigColdStorageOptions <a name="OpensearchserviceDomainClusterConfigColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainClusterConfigColdStorageOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainClusterConfigNodeOptions <a name="OpensearchserviceDomainClusterConfigNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainClusterConfigNodeOptions {
	NodeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig,
	NodeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}. |

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeConfig"></a>

```go
NodeConfig OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptions.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}.

---

### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig {
	Count: *f64,
	Enabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}.

---

### OpensearchserviceDomainClusterConfigZoneAwarenessConfig <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig {
	AvailabilityZoneCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}. |

---

##### `AvailabilityZoneCount`<sup>Optional</sup> <a name="AvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```go
AvailabilityZoneCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}.

---

### OpensearchserviceDomainCognitoOptions <a name="OpensearchserviceDomainCognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainCognitoOptions {
	Enabled: interface{},
	IdentityPoolId: *string,
	RoleArn: *string,
	UserPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `IdentityPoolId`<sup>Optional</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}.

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}.

---

### OpensearchserviceDomainConfig <a name="OpensearchserviceDomainConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessPolicies: *string,
	AdvancedOptions: *map[string]*string,
	AdvancedSecurityOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions,
	AimlOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions,
	AutomatedSnapshotPauseOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions,
	ClusterConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig,
	CognitoOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions,
	DeploymentStrategyOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions,
	DomainEndpointOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions,
	DomainName: *string,
	EbsOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions,
	EncryptionAtRestOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions,
	EngineMode: *string,
	EngineVersion: *string,
	IdentityCenterOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions,
	IpAddressType: *string,
	LogPublishingOptions: interface{},
	NodeToNodeEncryptionOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions,
	OffPeakWindowOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions,
	SkipShardMigrationWait: interface{},
	SnapshotOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions,
	SoftwareUpdateOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions,
	Tags: interface{},
	UseCase: *string,
	VpcOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies">AccessPolicies</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions">AdvancedOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions">AimlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions">AutomatedSnapshotPauseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions">DeploymentStrategyOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode">EngineMode</a></code> | <code>*string</code> | The engine mode of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions">IdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a></code> | Options for configuring Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions">LogPublishingOptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions">OffPeakWindowOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait">SkipShardMigrationWait</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions">SoftwareUpdateOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this Domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase">UseCase</a></code> | <code>*string</code> | The primary use case of the domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicies`<sup>Optional</sup> <a name="AccessPolicies" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.accessPolicies"></a>

```go
AccessPolicies *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}.

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedOptions"></a>

```go
AdvancedOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}.

---

##### `AdvancedSecurityOptions`<sup>Optional</sup> <a name="AdvancedSecurityOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.advancedSecurityOptions"></a>

```go
AdvancedSecurityOptions OpensearchserviceDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptions">OpensearchserviceDomainAdvancedSecurityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}.

---

##### `AimlOptions`<sup>Optional</sup> <a name="AimlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.aimlOptions"></a>

```go
AimlOptions OpensearchserviceDomainAimlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptions">OpensearchserviceDomainAimlOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}.

---

##### `AutomatedSnapshotPauseOptions`<sup>Optional</sup> <a name="AutomatedSnapshotPauseOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.automatedSnapshotPauseOptions"></a>

```go
AutomatedSnapshotPauseOptions OpensearchserviceDomainAutomatedSnapshotPauseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptions">OpensearchserviceDomainAutomatedSnapshotPauseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}.

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.clusterConfig"></a>

```go
ClusterConfig OpensearchserviceDomainClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfig">OpensearchserviceDomainClusterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}.

---

##### `CognitoOptions`<sup>Optional</sup> <a name="CognitoOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.cognitoOptions"></a>

```go
CognitoOptions OpensearchserviceDomainCognitoOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptions">OpensearchserviceDomainCognitoOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}.

---

##### `DeploymentStrategyOptions`<sup>Optional</sup> <a name="DeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.deploymentStrategyOptions"></a>

```go
DeploymentStrategyOptions OpensearchserviceDomainDeploymentStrategyOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions">OpensearchserviceDomainDeploymentStrategyOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}.

---

##### `DomainEndpointOptions`<sup>Optional</sup> <a name="DomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainEndpointOptions"></a>

```go
DomainEndpointOptions OpensearchserviceDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions">OpensearchserviceDomainDomainEndpointOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}.

---

##### `EbsOptions`<sup>Optional</sup> <a name="EbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ebsOptions"></a>

```go
EbsOptions OpensearchserviceDomainEbsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions">OpensearchserviceDomainEbsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}.

---

##### `EncryptionAtRestOptions`<sup>Optional</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.encryptionAtRestOptions"></a>

```go
EncryptionAtRestOptions OpensearchserviceDomainEncryptionAtRestOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions">OpensearchserviceDomainEncryptionAtRestOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}.

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineMode"></a>

```go
EngineMode *string
```

- *Type:* *string

The engine mode of the domain.

Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_mode OpensearchserviceDomain#engine_mode}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}.

---

##### `IdentityCenterOptions`<sup>Optional</sup> <a name="IdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.identityCenterOptions"></a>

```go
IdentityCenterOptions OpensearchserviceDomainIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions">OpensearchserviceDomainIdentityCenterOptions</a>

Options for configuring Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}.

---

##### `LogPublishingOptions`<sup>Optional</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.logPublishingOptions"></a>

```go
LogPublishingOptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}.

---

##### `NodeToNodeEncryptionOptions`<sup>Optional</sup> <a name="NodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.nodeToNodeEncryptionOptions"></a>

```go
NodeToNodeEncryptionOptions OpensearchserviceDomainNodeToNodeEncryptionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions">OpensearchserviceDomainNodeToNodeEncryptionOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}.

---

##### `OffPeakWindowOptions`<sup>Optional</sup> <a name="OffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.offPeakWindowOptions"></a>

```go
OffPeakWindowOptions OpensearchserviceDomainOffPeakWindowOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions">OpensearchserviceDomainOffPeakWindowOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}.

---

##### `SkipShardMigrationWait`<sup>Optional</sup> <a name="SkipShardMigrationWait" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.skipShardMigrationWait"></a>

```go
SkipShardMigrationWait interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}.

---

##### `SnapshotOptions`<sup>Optional</sup> <a name="SnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.snapshotOptions"></a>

```go
SnapshotOptions OpensearchserviceDomainSnapshotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions">OpensearchserviceDomainSnapshotOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}.

---

##### `SoftwareUpdateOptions`<sup>Optional</sup> <a name="SoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.softwareUpdateOptions"></a>

```go
SoftwareUpdateOptions OpensearchserviceDomainSoftwareUpdateOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions">OpensearchserviceDomainSoftwareUpdateOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}

---

##### `UseCase`<sup>Optional</sup> <a name="UseCase" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.useCase"></a>

```go
UseCase *string
```

- *Type:* *string

The primary use case of the domain.

Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_case OpensearchserviceDomain#use_case}

---

##### `VpcOptions`<sup>Optional</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainConfig.property.vpcOptions"></a>

```go
VpcOptions OpensearchserviceDomainVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions">OpensearchserviceDomainVpcOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}.

---

### OpensearchserviceDomainDeploymentStrategyOptions <a name="OpensearchserviceDomainDeploymentStrategyOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainDeploymentStrategyOptions {
	DeploymentStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy">DeploymentStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}. |

---

##### `DeploymentStrategy`<sup>Optional</sup> <a name="DeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptions.property.deploymentStrategy"></a>

```go
DeploymentStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}.

---

### OpensearchserviceDomainDomainEndpointOptions <a name="OpensearchserviceDomainDomainEndpointOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainDomainEndpointOptions {
	CustomEndpoint: *string,
	CustomEndpointCertificateArn: *string,
	CustomEndpointEnabled: interface{},
	EnforceHttps: interface{},
	TlsSecurityPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint">CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}. |

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpoint"></a>

```go
CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}.

---

##### `CustomEndpointCertificateArn`<sup>Optional</sup> <a name="CustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```go
CustomEndpointCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}.

---

##### `CustomEndpointEnabled`<sup>Optional</sup> <a name="CustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```go
CustomEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}.

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.enforceHttps"></a>

```go
EnforceHttps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```go
TlsSecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}.

---

### OpensearchserviceDomainEbsOptions <a name="OpensearchserviceDomainEbsOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainEbsOptions {
	EbsEnabled: interface{},
	Iops: *f64,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled">EbsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}. |

---

##### `EbsEnabled`<sup>Optional</sup> <a name="EbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.ebsEnabled"></a>

```go
EbsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptions.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}.

---

### OpensearchserviceDomainEncryptionAtRestOptions <a name="OpensearchserviceDomainEncryptionAtRestOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainEncryptionAtRestOptions {
	Enabled: interface{},
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptions.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}.

---

### OpensearchserviceDomainIdentityCenterOptions <a name="OpensearchserviceDomainIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainIdentityCenterOptions {
	EnabledApiAccess: interface{},
	IdentityCenterInstanceArn: *string,
	RolesKey: *string,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess">EnabledApiAccess</a></code> | <code>interface{}</code> | Whether Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey">RolesKey</a></code> | <code>*string</code> | The roles key for Identity Center options. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | The subject key for Identity Center options. |

---

##### `EnabledApiAccess`<sup>Optional</sup> <a name="EnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.enabledApiAccess"></a>

```go
EnabledApiAccess interface{}
```

- *Type:* interface{}

Whether Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}

---

##### `IdentityCenterInstanceArn`<sup>Optional</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.identityCenterInstanceArn"></a>

```go
IdentityCenterInstanceArn *string
```

- *Type:* *string

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

The roles key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptions.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

The subject key for Identity Center options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}

---

### OpensearchserviceDomainLogPublishingOptions <a name="OpensearchserviceDomainLogPublishingOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainLogPublishingOptions {
	CloudwatchLogsLogGroupArn: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `CloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.cloudwatchLogsLogGroupArn"></a>

```go
CloudwatchLogsLogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainNodeToNodeEncryptionOptions <a name="OpensearchserviceDomainNodeToNodeEncryptionOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainNodeToNodeEncryptionOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

### OpensearchserviceDomainOffPeakWindowOptions <a name="OpensearchserviceDomainOffPeakWindowOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainOffPeakWindowOptions {
	Enabled: interface{},
	OffPeakWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}.

---

##### `OffPeakWindow`<sup>Optional</sup> <a name="OffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptions.property.offPeakWindow"></a>

```go
OffPeakWindow OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow {
	WindowStartTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}. |

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow.property.windowStartTime"></a>

```go
WindowStartTime OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}.

---

### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}.

---

### OpensearchserviceDomainServiceSoftwareOptions <a name="OpensearchserviceDomainServiceSoftwareOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainServiceSoftwareOptions {

}
```


### OpensearchserviceDomainSnapshotOptions <a name="OpensearchserviceDomainSnapshotOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainSnapshotOptions {
	AutomatedSnapshotStartHour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}. |

---

##### `AutomatedSnapshotStartHour`<sup>Optional</sup> <a name="AutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```go
AutomatedSnapshotStartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}.

---

### OpensearchserviceDomainSoftwareUpdateOptions <a name="OpensearchserviceDomainSoftwareUpdateOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainSoftwareUpdateOptions {
	AutoSoftwareUpdateEnabled: interface{},
	UseLatestServiceSoftwareForBlueGreen: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen">UseLatestServiceSoftwareForBlueGreen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}. |

---

##### `AutoSoftwareUpdateEnabled`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.autoSoftwareUpdateEnabled"></a>

```go
AutoSoftwareUpdateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}.

---

##### `UseLatestServiceSoftwareForBlueGreen`<sup>Optional</sup> <a name="UseLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptions.property.useLatestServiceSoftwareForBlueGreen"></a>

```go
UseLatestServiceSoftwareForBlueGreen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green OpensearchserviceDomain#use_latest_service_software_for_blue_green}.

---

### OpensearchserviceDomainTags <a name="OpensearchserviceDomainTags" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key">Key</a></code> | <code>*string</code> | The value of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value">Value</a></code> | <code>*string</code> | The key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#key OpensearchserviceDomain#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#value OpensearchserviceDomain#value}

---

### OpensearchserviceDomainVpcOptions <a name="OpensearchserviceDomainVpcOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

&opensearchservicedomain.OpensearchserviceDomainVpcOptions {
	EgressEnabled: interface{},
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled">EgressEnabled</a></code> | <code>interface{}</code> | Controls whether egress traffic from the domain is routed through the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}. |

---

##### `EgressEnabled`<sup>Optional</sup> <a name="EgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.egressEnabled"></a>

```go
EgressEnabled interface{}
```

- *Type:* interface{}

Controls whether egress traffic from the domain is routed through the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">ResetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMasterUserArn` <a name="ResetMasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```go
func ResetMasterUserArn()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```go
func ResetMasterUserName()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">MasterUserArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">MasterUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MasterUserArnInput`<sup>Optional</sup> <a name="MasterUserArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```go
func MasterUserArnInput() *string
```

- *Type:* *string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```go
func MasterUserNameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUserArn`<sup>Required</sup> <a name="MasterUserArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```go
func MasterUserArn() *string
```

- *Type:* *string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```go
func MasterUserName() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions">PutIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions">PutJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">PutMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions">PutSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">ResetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions">ResetIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">ResetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions">ResetJwtOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">ResetMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions">ResetSamlOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamFederationOptions` <a name="PutIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions"></a>

```go
func PutIamFederationOptions(value OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putIamFederationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions</a>

---

##### `PutJwtOptions` <a name="PutJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions"></a>

```go
func PutJwtOptions(value OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putJwtOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions</a>

---

##### `PutMasterUserOptions` <a name="PutMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```go
func PutMasterUserOptions(value OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `PutSamlOptions` <a name="PutSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions"></a>

```go
func PutSamlOptions(value OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions</a>

---

##### `ResetAnonymousAuthEnabled` <a name="ResetAnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```go
func ResetAnonymousAuthEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIamFederationOptions` <a name="ResetIamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetIamFederationOptions"></a>

```go
func ResetIamFederationOptions()
```

##### `ResetInternalUserDatabaseEnabled` <a name="ResetInternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```go
func ResetInternalUserDatabaseEnabled()
```

##### `ResetJwtOptions` <a name="ResetJwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetJwtOptions"></a>

```go
func ResetJwtOptions()
```

##### `ResetMasterUserOptions` <a name="ResetMasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```go
func ResetMasterUserOptions()
```

##### `ResetSamlOptions` <a name="ResetSamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.resetSamlOptions"></a>

```go
func ResetSamlOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate">AnonymousAuthDisableDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions">JwtOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">AnonymousAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput">IamFederationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">InternalUserDatabaseEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput">JwtOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">MasterUserOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput">SamlOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">AnonymousAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnonymousAuthDisableDate`<sup>Required</sup> <a name="AnonymousAuthDisableDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthDisableDate"></a>

```go
func AnonymousAuthDisableDate() *string
```

- *Type:* *string

---

##### `IamFederationOptions`<sup>Required</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptions"></a>

```go
func IamFederationOptions() OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference</a>

---

##### `JwtOptions`<sup>Required</sup> <a name="JwtOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptions"></a>

```go
func JwtOptions() OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference</a>

---

##### `MasterUserOptions`<sup>Required</sup> <a name="MasterUserOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```go
func MasterUserOptions() OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptions"></a>

```go
func SamlOptions() OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference</a>

---

##### `AnonymousAuthEnabledInput`<sup>Optional</sup> <a name="AnonymousAuthEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```go
func AnonymousAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IamFederationOptionsInput`<sup>Optional</sup> <a name="IamFederationOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.iamFederationOptionsInput"></a>

```go
func IamFederationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="InternalUserDatabaseEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```go
func InternalUserDatabaseEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JwtOptionsInput`<sup>Optional</sup> <a name="JwtOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.jwtOptionsInput"></a>

```go
func JwtOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `MasterUserOptionsInput`<sup>Optional</sup> <a name="MasterUserOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```go
func MasterUserOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SamlOptionsInput`<sup>Optional</sup> <a name="SamlOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.samlOptionsInput"></a>

```go
func SamlOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AnonymousAuthEnabled`<sup>Required</sup> <a name="AnonymousAuthEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```go
func AnonymousAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```go
func InternalUserDatabaseEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent">ResetMetadataContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetMetadataContent` <a name="ResetMetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.resetMetadataContent"></a>

```go
func ResetMetadataContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">MetadataContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent">MetadataContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `MetadataContentInput`<sup>Optional</sup> <a name="MetadataContentInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```go
func MetadataContentInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```go
func MetadataContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference <a name="OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp">PutIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp">ResetIdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole">ResetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdp` <a name="PutIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp"></a>

```go
func PutIdp(value OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIdp` <a name="ResetIdp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetIdp"></a>

```go
func ResetIdp()
```

##### `ResetMasterBackendRole` <a name="ResetMasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```go
func ResetMasterBackendRole()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```go
func ResetMasterUserName()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```go
func ResetSessionTimeoutMinutes()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp">Idp</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput">IdpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">MasterBackendRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole">MasterBackendRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Idp`<sup>Required</sup> <a name="Idp" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idp"></a>

```go
func Idp() OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference">OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdpInput`<sup>Optional</sup> <a name="IdpInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.idpInput"></a>

```go
func IdpInput() interface{}
```

- *Type:* interface{}

---

##### `MasterBackendRoleInput`<sup>Optional</sup> <a name="MasterBackendRoleInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```go
func MasterBackendRoleInput() *string
```

- *Type:* *string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```go
func MasterUserNameInput() *string
```

- *Type:* *string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```go
func SessionTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MasterBackendRole`<sup>Required</sup> <a name="MasterBackendRole" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```go
func MasterBackendRole() *string
```

- *Type:* *string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```go
func MasterUserName() *string
```

- *Type:* *string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```go
func SessionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAimlOptionsOutputReference <a name="OpensearchserviceDomainAimlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAimlOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAimlOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine">PutS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration">PutServerlessVectorAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine">ResetS3VectorsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration">ResetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3VectorsEngine` <a name="PutS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine"></a>

```go
func PutS3VectorsEngine(value OpensearchserviceDomainAimlOptionsS3VectorsEngine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putS3VectorsEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngine">OpensearchserviceDomainAimlOptionsS3VectorsEngine</a>

---

##### `PutServerlessVectorAcceleration` <a name="PutServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration"></a>

```go
func PutServerlessVectorAcceleration(value OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.putServerlessVectorAcceleration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration">OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration</a>

---

##### `ResetS3VectorsEngine` <a name="ResetS3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetS3VectorsEngine"></a>

```go
func ResetS3VectorsEngine()
```

##### `ResetServerlessVectorAcceleration` <a name="ResetServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```go
func ResetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine">S3VectorsEngine</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput">S3VectorsEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput">ServerlessVectorAccelerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3VectorsEngine`<sup>Required</sup> <a name="S3VectorsEngine" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngine"></a>

```go
func S3VectorsEngine() OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference">OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference</a>

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```go
func ServerlessVectorAcceleration() OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference">OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference</a>

---

##### `S3VectorsEngineInput`<sup>Optional</sup> <a name="S3VectorsEngineInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.s3VectorsEngineInput"></a>

```go
func S3VectorsEngineInput() interface{}
```

- *Type:* interface{}

---

##### `ServerlessVectorAccelerationInput`<sup>Optional</sup> <a name="ServerlessVectorAccelerationInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```go
func ServerlessVectorAccelerationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference <a name="OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference <a name="OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference <a name="OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigNodeOptionsList <a name="OpensearchserviceDomainClusterConfigNodeOptionsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigNodeOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserviceDomainClusterConfigNodeOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get"></a>

```go
func Get(index *f64) OpensearchserviceDomainClusterConfigNodeOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigNodeOptionsOutputReference <a name="OpensearchserviceDomainClusterConfigNodeOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigNodeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserviceDomainClusterConfigNodeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig"></a>

```go
func PutNodeConfig(value OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig</a>

---

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.resetNodeType"></a>

```go
func ResetNodeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput">NodeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference">OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeConfigInput"></a>

```go
func NodeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigOutputReference <a name="OpensearchserviceDomainClusterConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions">PutColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions">PutNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig">PutZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions">ResetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount">ResetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">ResetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType">ResetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled">ResetMultiAzWithStandbyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions">ResetNodeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount">ResetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled">ResetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType">ResetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig">ResetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">ResetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColdStorageOptions` <a name="PutColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```go
func PutColdStorageOptions(value OpensearchserviceDomainClusterConfigColdStorageOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptions">OpensearchserviceDomainClusterConfigColdStorageOptions</a>

---

##### `PutNodeOptions` <a name="PutNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions"></a>

```go
func PutNodeOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putNodeOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZoneAwarenessConfig` <a name="PutZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```go
func PutZoneAwarenessConfig(value OpensearchserviceDomainClusterConfigZoneAwarenessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfig">OpensearchserviceDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ResetColdStorageOptions` <a name="ResetColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```go
func ResetColdStorageOptions()
```

##### `ResetDedicatedMasterCount` <a name="ResetDedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```go
func ResetDedicatedMasterCount()
```

##### `ResetDedicatedMasterEnabled` <a name="ResetDedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```go
func ResetDedicatedMasterEnabled()
```

##### `ResetDedicatedMasterType` <a name="ResetDedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```go
func ResetDedicatedMasterType()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetMultiAzWithStandbyEnabled` <a name="ResetMultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetMultiAzWithStandbyEnabled"></a>

```go
func ResetMultiAzWithStandbyEnabled()
```

##### `ResetNodeOptions` <a name="ResetNodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetNodeOptions"></a>

```go
func ResetNodeOptions()
```

##### `ResetWarmCount` <a name="ResetWarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmCount"></a>

```go
func ResetWarmCount()
```

##### `ResetWarmEnabled` <a name="ResetWarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```go
func ResetWarmEnabled()
```

##### `ResetWarmType` <a name="ResetWarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetWarmType"></a>

```go
func ResetWarmType()
```

##### `ResetZoneAwarenessConfig` <a name="ResetZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```go
func ResetZoneAwarenessConfig()
```

##### `ResetZoneAwarenessEnabled` <a name="ResetZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```go
func ResetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions">NodeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput">ColdStorageOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">DedicatedMasterCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">DedicatedMasterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">DedicatedMasterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput">MultiAzWithStandbyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput">NodeOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput">WarmCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput">WarmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput">WarmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">ZoneAwarenessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">ZoneAwarenessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">MultiAzWithStandbyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```go
func ColdStorageOptions() OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference">OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `NodeOptions`<sup>Required</sup> <a name="NodeOptions" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptions"></a>

```go
func NodeOptions() OpensearchserviceDomainClusterConfigNodeOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigNodeOptionsList">OpensearchserviceDomainClusterConfigNodeOptionsList</a>

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```go
func ZoneAwarenessConfig() OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `ColdStorageOptionsInput`<sup>Optional</sup> <a name="ColdStorageOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```go
func ColdStorageOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterCountInput`<sup>Optional</sup> <a name="DedicatedMasterCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```go
func DedicatedMasterCountInput() *f64
```

- *Type:* *f64

---

##### `DedicatedMasterEnabledInput`<sup>Optional</sup> <a name="DedicatedMasterEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```go
func DedicatedMasterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterTypeInput`<sup>Optional</sup> <a name="DedicatedMasterTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```go
func DedicatedMasterTypeInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MultiAzWithStandbyEnabledInput`<sup>Optional</sup> <a name="MultiAzWithStandbyEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabledInput"></a>

```go
func MultiAzWithStandbyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeOptionsInput`<sup>Optional</sup> <a name="NodeOptionsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.nodeOptionsInput"></a>

```go
func NodeOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmCountInput`<sup>Optional</sup> <a name="WarmCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCountInput"></a>

```go
func WarmCountInput() *f64
```

- *Type:* *f64

---

##### `WarmEnabledInput`<sup>Optional</sup> <a name="WarmEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```go
func WarmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WarmTypeInput`<sup>Optional</sup> <a name="WarmTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```go
func WarmTypeInput() *string
```

- *Type:* *string

---

##### `ZoneAwarenessConfigInput`<sup>Optional</sup> <a name="ZoneAwarenessConfigInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```go
func ZoneAwarenessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneAwarenessEnabledInput`<sup>Optional</sup> <a name="ZoneAwarenessEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```go
func ZoneAwarenessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```go
func DedicatedMasterCount() *f64
```

- *Type:* *f64

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```go
func DedicatedMasterEnabled() interface{}
```

- *Type:* interface{}

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```go
func DedicatedMasterType() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MultiAzWithStandbyEnabled`<sup>Required</sup> <a name="MultiAzWithStandbyEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```go
func MultiAzWithStandbyEnabled() interface{}
```

- *Type:* interface{}

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmCount"></a>

```go
func WarmCount() *f64
```

- *Type:* *f64

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmEnabled"></a>

```go
func WarmEnabled() interface{}
```

- *Type:* interface{}

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.warmType"></a>

```go
func WarmType() *string
```

- *Type:* *string

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```go
func ZoneAwarenessEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">ResetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneCount` <a name="ResetAvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```go
func ResetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">AvailabilityZoneCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneCountInput`<sup>Optional</sup> <a name="AvailabilityZoneCountInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```go
func AvailabilityZoneCountInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```go
func AvailabilityZoneCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainCognitoOptionsOutputReference <a name="OpensearchserviceDomainCognitoOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainCognitoOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainCognitoOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId">ResetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIdentityPoolId` <a name="ResetIdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetIdentityPoolId"></a>

```go
func ResetIdentityPoolId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.resetUserPoolId"></a>

```go
func ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainCognitoOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainDeploymentStrategyOptionsOutputReference <a name="OpensearchserviceDomainDeploymentStrategyOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainDeploymentStrategyOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainDeploymentStrategyOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy">ResetDeploymentStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentStrategy` <a name="ResetDeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.resetDeploymentStrategy"></a>

```go
func ResetDeploymentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput">DeploymentStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy">DeploymentStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentStrategyInput`<sup>Optional</sup> <a name="DeploymentStrategyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategyInput"></a>

```go
func DeploymentStrategyInput() *string
```

- *Type:* *string

---

##### `DeploymentStrategy`<sup>Required</sup> <a name="DeploymentStrategy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.deploymentStrategy"></a>

```go
func DeploymentStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDeploymentStrategyOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainDomainEndpointOptionsOutputReference <a name="OpensearchserviceDomainDomainEndpointOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainDomainEndpointOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainDomainEndpointOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">ResetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">ResetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```go
func ResetCustomEndpoint()
```

##### `ResetCustomEndpointCertificateArn` <a name="ResetCustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```go
func ResetCustomEndpointCertificateArn()
```

##### `ResetCustomEndpointEnabled` <a name="ResetCustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```go
func ResetCustomEndpointEnabled()
```

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```go
func ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```go
func ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">CustomEndpointCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">CustomEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEndpointCertificateArnInput`<sup>Optional</sup> <a name="CustomEndpointCertificateArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```go
func CustomEndpointCertificateArnInput() *string
```

- *Type:* *string

---

##### `CustomEndpointEnabledInput`<sup>Optional</sup> <a name="CustomEndpointEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```go
func CustomEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```go
func CustomEndpointInput() *string
```

- *Type:* *string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```go
func EnforceHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```go
func TlsSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```go
func CustomEndpoint() *string
```

- *Type:* *string

---

##### `CustomEndpointCertificateArn`<sup>Required</sup> <a name="CustomEndpointCertificateArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```go
func CustomEndpointCertificateArn() *string
```

- *Type:* *string

---

##### `CustomEndpointEnabled`<sup>Required</sup> <a name="CustomEndpointEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```go
func CustomEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```go
func EnforceHttps() interface{}
```

- *Type:* interface{}

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```go
func TlsSecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainEbsOptionsOutputReference <a name="OpensearchserviceDomainEbsOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainEbsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainEbsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled">ResetEbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEbsEnabled` <a name="ResetEbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetEbsEnabled"></a>

```go
func ResetEbsEnabled()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput">EbsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsEnabledInput`<sup>Optional</sup> <a name="EbsEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```go
func EbsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```go
func EbsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEbsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainEncryptionAtRestOptionsOutputReference <a name="OpensearchserviceDomainEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainEncryptionAtRestOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainEncryptionAtRestOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainIdentityCenterOptionsOutputReference <a name="OpensearchserviceDomainIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainIdentityCenterOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainIdentityCenterOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess">ResetEnabledApiAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn">ResetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledApiAccess` <a name="ResetEnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetEnabledApiAccess"></a>

```go
func ResetEnabledApiAccess()
```

##### `ResetIdentityCenterInstanceArn` <a name="ResetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetIdentityCenterInstanceArn"></a>

```go
func ResetIdentityCenterInstanceArn()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId">IdentityStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput">EnabledApiAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess">EnabledApiAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterApplicationArn"></a>

```go
func IdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityStoreId"></a>

```go
func IdentityStoreId() *string
```

- *Type:* *string

---

##### `EnabledApiAccessInput`<sup>Optional</sup> <a name="EnabledApiAccessInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccessInput"></a>

```go
func EnabledApiAccessInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArnInput"></a>

```go
func IdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `EnabledApiAccess`<sup>Required</sup> <a name="EnabledApiAccess" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.enabledApiAccess"></a>

```go
func EnabledApiAccess() interface{}
```

- *Type:* interface{}

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.identityCenterInstanceArn"></a>

```go
func IdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainIdentityCenterOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainLogPublishingOptionsMap <a name="OpensearchserviceDomainLogPublishingOptionsMap" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainLogPublishingOptionsMap(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainLogPublishingOptionsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get"></a>

```go
func Get(key *string) OpensearchserviceDomainLogPublishingOptionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainLogPublishingOptionsOutputReference <a name="OpensearchserviceDomainLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainLogPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) OpensearchserviceDomainLogPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn">ResetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsLogGroupArn` <a name="ResetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```go
func ResetCloudwatchLogsLogGroupArn()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput">CloudwatchLogsLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```go
func CloudwatchLogsLogGroupArnInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```go
func CloudwatchLogsLogGroupArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference <a name="OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime"></a>

```go
func PutWindowStartTime(value OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resetWindowStartTime"></a>

```go
func ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference</a>

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTimeInput"></a>

```go
func WindowStartTimeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainOffPeakWindowOptionsOutputReference <a name="OpensearchserviceDomainOffPeakWindowOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainOffPeakWindowOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainOffPeakWindowOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow">PutOffPeakWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow">ResetOffPeakWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOffPeakWindow` <a name="PutOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow"></a>

```go
func PutOffPeakWindow(value OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.putOffPeakWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetOffPeakWindow` <a name="ResetOffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.resetOffPeakWindow"></a>

```go
func ResetOffPeakWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">OffPeakWindow</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput">OffPeakWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffPeakWindow`<sup>Required</sup> <a name="OffPeakWindow" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```go
func OffPeakWindow() OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference">OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OffPeakWindowInput`<sup>Optional</sup> <a name="OffPeakWindowInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.offPeakWindowInput"></a>

```go
func OffPeakWindowInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainServiceSoftwareOptionsOutputReference <a name="OpensearchserviceDomainServiceSoftwareOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainServiceSoftwareOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainServiceSoftwareOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate">AutomatedUpdateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable">Cancellable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion">NewVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment">OptionalDeployment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable">UpdateAvailable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomatedUpdateDate`<sup>Required</sup> <a name="AutomatedUpdateDate" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.automatedUpdateDate"></a>

```go
func AutomatedUpdateDate() *string
```

- *Type:* *string

---

##### `Cancellable`<sup>Required</sup> <a name="Cancellable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.cancellable"></a>

```go
func Cancellable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `NewVersion`<sup>Required</sup> <a name="NewVersion" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.newVersion"></a>

```go
func NewVersion() *string
```

- *Type:* *string

---

##### `OptionalDeployment`<sup>Required</sup> <a name="OptionalDeployment" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.optionalDeployment"></a>

```go
func OptionalDeployment() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdateAvailable`<sup>Required</sup> <a name="UpdateAvailable" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateAvailable"></a>

```go
func UpdateAvailable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.updateStatus"></a>

```go
func UpdateStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchserviceDomainServiceSoftwareOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainServiceSoftwareOptions">OpensearchserviceDomainServiceSoftwareOptions</a>

---


### OpensearchserviceDomainSnapshotOptionsOutputReference <a name="OpensearchserviceDomainSnapshotOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainSnapshotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainSnapshotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour">ResetAutomatedSnapshotStartHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomatedSnapshotStartHour` <a name="ResetAutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.resetAutomatedSnapshotStartHour"></a>

```go
func ResetAutomatedSnapshotStartHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">AutomatedSnapshotStartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotStartHourInput`<sup>Optional</sup> <a name="AutomatedSnapshotStartHourInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```go
func AutomatedSnapshotStartHourInput() *f64
```

- *Type:* *f64

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```go
func AutomatedSnapshotStartHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainSoftwareUpdateOptionsOutputReference <a name="OpensearchserviceDomainSoftwareUpdateOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainSoftwareUpdateOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainSoftwareUpdateOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled">ResetAutoSoftwareUpdateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen">ResetUseLatestServiceSoftwareForBlueGreen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoSoftwareUpdateEnabled` <a name="ResetAutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetAutoSoftwareUpdateEnabled"></a>

```go
func ResetAutoSoftwareUpdateEnabled()
```

##### `ResetUseLatestServiceSoftwareForBlueGreen` <a name="ResetUseLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.resetUseLatestServiceSoftwareForBlueGreen"></a>

```go
func ResetUseLatestServiceSoftwareForBlueGreen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput">AutoSoftwareUpdateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput">UseLatestServiceSoftwareForBlueGreenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">AutoSoftwareUpdateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen">UseLatestServiceSoftwareForBlueGreen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoSoftwareUpdateEnabledInput`<sup>Optional</sup> <a name="AutoSoftwareUpdateEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabledInput"></a>

```go
func AutoSoftwareUpdateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UseLatestServiceSoftwareForBlueGreenInput`<sup>Optional</sup> <a name="UseLatestServiceSoftwareForBlueGreenInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreenInput"></a>

```go
func UseLatestServiceSoftwareForBlueGreenInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSoftwareUpdateEnabled`<sup>Required</sup> <a name="AutoSoftwareUpdateEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```go
func AutoSoftwareUpdateEnabled() interface{}
```

- *Type:* interface{}

---

##### `UseLatestServiceSoftwareForBlueGreen`<sup>Required</sup> <a name="UseLatestServiceSoftwareForBlueGreen" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.useLatestServiceSoftwareForBlueGreen"></a>

```go
func UseLatestServiceSoftwareForBlueGreen() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainTagsList <a name="OpensearchserviceDomainTagsList" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserviceDomainTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get"></a>

```go
func Get(index *f64) OpensearchserviceDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainTagsOutputReference <a name="OpensearchserviceDomainTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserviceDomainTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserviceDomainVpcOptionsOutputReference <a name="OpensearchserviceDomainVpcOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchservicedomain"

opensearchservicedomain.NewOpensearchserviceDomainVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserviceDomainVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled">ResetEgressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressEnabled` <a name="ResetEgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetEgressEnabled"></a>

```go
func ResetEgressEnabled()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput">EgressEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled">EgressEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressEnabledInput`<sup>Optional</sup> <a name="EgressEnabledInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabledInput"></a>

```go
func EgressEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EgressEnabled`<sup>Required</sup> <a name="EgressEnabled" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.egressEnabled"></a>

```go
func EgressEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchserviceDomain.OpensearchserviceDomainVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



