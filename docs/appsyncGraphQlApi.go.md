# `appsyncGraphQlApi` Submodule <a name="`appsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.appsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphQlApi <a name="AppsyncGraphQlApi" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApi(scope Construct, id *string, config AppsyncGraphQlApiConfig) AppsyncGraphQlApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders">PutAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig">PutEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders">ResetAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType">ResetApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig">ResetEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig">ResetIntrospectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn">ResetMergedApiExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact">ResetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit">ResetQueryDepthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit">ResetResolverCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled">ResetXrayEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalAuthenticationProviders` <a name="PutAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders"></a>

```go
func PutAdditionalAuthenticationProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnhancedMetricsConfig` <a name="PutEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig"></a>

```go
func PutEnhancedMetricsConfig(value AppsyncGraphQlApiEnhancedMetricsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig"></a>

```go
func PutLambdaAuthorizerConfig(value AppsyncGraphQlApiLambdaAuthorizerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig"></a>

```go
func PutLogConfig(value AppsyncGraphQlApiLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig"></a>

```go
func PutOpenIdConnectConfig(value AppsyncGraphQlApiOpenIdConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig"></a>

```go
func PutUserPoolConfig(value AppsyncGraphQlApiUserPoolConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `ResetAdditionalAuthenticationProviders` <a name="ResetAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders"></a>

```go
func ResetAdditionalAuthenticationProviders()
```

##### `ResetApiType` <a name="ResetApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType"></a>

```go
func ResetApiType()
```

##### `ResetEnhancedMetricsConfig` <a name="ResetEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig"></a>

```go
func ResetEnhancedMetricsConfig()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetIntrospectionConfig` <a name="ResetIntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig"></a>

```go
func ResetIntrospectionConfig()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig"></a>

```go
func ResetLambdaAuthorizerConfig()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetMergedApiExecutionRoleArn` <a name="ResetMergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn"></a>

```go
func ResetMergedApiExecutionRoleArn()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig"></a>

```go
func ResetOpenIdConnectConfig()
```

##### `ResetOwnerContact` <a name="ResetOwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact"></a>

```go
func ResetOwnerContact()
```

##### `ResetQueryDepthLimit` <a name="ResetQueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit"></a>

```go
func ResetQueryDepthLimit()
```

##### `ResetResolverCountLimit` <a name="ResetResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit"></a>

```go
func ResetResolverCountLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig"></a>

```go
func ResetUserPoolConfig()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility"></a>

```go
func ResetVisibility()
```

##### `ResetXrayEnabled` <a name="ResetXrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled"></a>

```go
func ResetXrayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.AppsyncGraphQlApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.AppsyncGraphQlApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.AppsyncGraphQlApi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.AppsyncGraphQlApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppsyncGraphQlApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders">AdditionalAuthenticationProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig">EnhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns">GraphQlDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn">GraphQlEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl">GraphQlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns">RealtimeDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl">RealtimeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput">AdditionalAuthenticationProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput">ApiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput">EnhancedMetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput">IntrospectionConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput">LogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput">MergedApiExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput">OwnerContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput">QueryDepthLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput">ResolverCountLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput">XrayEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig">IntrospectionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn">MergedApiExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact">OwnerContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit">QueryDepthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit">ResolverCountLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled">XrayEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalAuthenticationProviders`<sup>Required</sup> <a name="AdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```go
func AdditionalAuthenticationProviders() AppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EnhancedMetricsConfig`<sup>Required</sup> <a name="EnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```go
func EnhancedMetricsConfig() AppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `GraphQlDns`<sup>Required</sup> <a name="GraphQlDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns"></a>

```go
func GraphQlDns() *string
```

- *Type:* *string

---

##### `GraphQlEndpointArn`<sup>Required</sup> <a name="GraphQlEndpointArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```go
func GraphQlEndpointArn() *string
```

- *Type:* *string

---

##### `GraphQlUrl`<sup>Required</sup> <a name="GraphQlUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl"></a>

```go
func GraphQlUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```go
func LambdaAuthorizerConfig() AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig"></a>

```go
func LogConfig() AppsyncGraphQlApiLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig"></a>

```go
func OpenIdConnectConfig() AppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `RealtimeDns`<sup>Required</sup> <a name="RealtimeDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns"></a>

```go
func RealtimeDns() *string
```

- *Type:* *string

---

##### `RealtimeUrl`<sup>Required</sup> <a name="RealtimeUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl"></a>

```go
func RealtimeUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags"></a>

```go
func Tags() AppsyncGraphQlApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig"></a>

```go
func UserPoolConfig() AppsyncGraphQlApiUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `AdditionalAuthenticationProvidersInput`<sup>Optional</sup> <a name="AdditionalAuthenticationProvidersInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput"></a>

```go
func AdditionalAuthenticationProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `ApiTypeInput`<sup>Optional</sup> <a name="ApiTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput"></a>

```go
func ApiTypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `EnhancedMetricsConfigInput`<sup>Optional</sup> <a name="EnhancedMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput"></a>

```go
func EnhancedMetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IntrospectionConfigInput`<sup>Optional</sup> <a name="IntrospectionConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput"></a>

```go
func IntrospectionConfigInput() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput"></a>

```go
func LambdaAuthorizerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput"></a>

```go
func LogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `MergedApiExecutionRoleArnInput`<sup>Optional</sup> <a name="MergedApiExecutionRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput"></a>

```go
func MergedApiExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput"></a>

```go
func OpenIdConnectConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerContactInput`<sup>Optional</sup> <a name="OwnerContactInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput"></a>

```go
func OwnerContactInput() *string
```

- *Type:* *string

---

##### `QueryDepthLimitInput`<sup>Optional</sup> <a name="QueryDepthLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput"></a>

```go
func QueryDepthLimitInput() *f64
```

- *Type:* *f64

---

##### `ResolverCountLimitInput`<sup>Optional</sup> <a name="ResolverCountLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput"></a>

```go
func ResolverCountLimitInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput"></a>

```go
func UserPoolConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `XrayEnabledInput`<sup>Optional</sup> <a name="XrayEnabledInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput"></a>

```go
func XrayEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IntrospectionConfig`<sup>Required</sup> <a name="IntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig"></a>

```go
func IntrospectionConfig() *string
```

- *Type:* *string

---

##### `MergedApiExecutionRoleArn`<sup>Required</sup> <a name="MergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```go
func MergedApiExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerContact`<sup>Required</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact"></a>

```go
func OwnerContact() *string
```

- *Type:* *string

---

##### `QueryDepthLimit`<sup>Required</sup> <a name="QueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit"></a>

```go
func QueryDepthLimit() *f64
```

- *Type:* *f64

---

##### `ResolverCountLimit`<sup>Required</sup> <a name="ResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit"></a>

```go
func ResolverCountLimit() *f64
```

- *Type:* *f64

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `XrayEnabled`<sup>Required</sup> <a name="XrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled"></a>

```go
func XrayEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProviders <a name="AppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiAdditionalAuthenticationProviders {
	AuthenticationType: *string,
	LambdaAuthorizerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig,
	OpenIdConnectConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig,
	UserPoolConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig"></a>

```go
LambdaAuthorizerConfig AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}.

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig"></a>

```go
OpenIdConnectConfig AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}.

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig"></a>

```go
UserPoolConfig AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}.

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig {
	AuthorizerResultTtlInSeconds: *f64,
	AuthorizerUri: *string,
	IdentityValidationExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```go
IdentityValidationExpression *string
```

- *Type:* *string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig {
	AuthTtl: *f64,
	ClientId: *string,
	IatTtl: *f64,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The issuer for the OIDC configuration. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl"></a>

```go
AuthTtl *f64
```

- *Type:* *f64

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl"></a>

```go
IatTtl *f64
```

- *Type:* *f64

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig {
	AppIdClientRegex: *string,
	AwsRegion: *string,
	UserPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | The user pool ID. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex"></a>

```go
AppIdClientRegex *string
```

- *Type:* *string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

### AppsyncGraphQlApiConfig <a name="AppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationType: *string,
	Name: *string,
	AdditionalAuthenticationProviders: interface{},
	ApiType: *string,
	EnhancedMetricsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig,
	EnvironmentVariables: *map[string]*string,
	IntrospectionConfig: *string,
	LambdaAuthorizerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig,
	LogConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig,
	MergedApiExecutionRoleArn: *string,
	OpenIdConnectConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig,
	OwnerContact: *string,
	QueryDepthLimit: *f64,
	ResolverCountLimit: *f64,
	Tags: interface{},
	UserPoolConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig,
	Visibility: *string,
	XrayEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name">Name</a></code> | <code>*string</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders">AdditionalAuthenticationProviders</a></code> | <code>interface{}</code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType">ApiType</a></code> | <code>*string</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig">EnhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig">IntrospectionConfig</a></code> | <code>*string</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn">MergedApiExecutionRoleArn</a></code> | <code>*string</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact">OwnerContact</a></code> | <code>*string</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit">QueryDepthLimit</a></code> | <code>*f64</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit">ResolverCountLimit</a></code> | <code>*f64</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled">XrayEnabled</a></code> | <code>interface{}</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `AdditionalAuthenticationProviders`<sup>Optional</sup> <a name="AdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders"></a>

```go
AdditionalAuthenticationProviders interface{}
```

- *Type:* interface{}

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `ApiType`<sup>Optional</sup> <a name="ApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType"></a>

```go
ApiType *string
```

- *Type:* *string

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `EnhancedMetricsConfig`<sup>Optional</sup> <a name="EnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig"></a>

```go
EnhancedMetricsConfig AppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `IntrospectionConfig`<sup>Optional</sup> <a name="IntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig"></a>

```go
IntrospectionConfig *string
```

- *Type:* *string

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig"></a>

```go
LambdaAuthorizerConfig AppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig"></a>

```go
LogConfig AppsyncGraphQlApiLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `MergedApiExecutionRoleArn`<sup>Optional</sup> <a name="MergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn"></a>

```go
MergedApiExecutionRoleArn *string
```

- *Type:* *string

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig"></a>

```go
OpenIdConnectConfig AppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `OwnerContact`<sup>Optional</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact"></a>

```go
OwnerContact *string
```

- *Type:* *string

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `QueryDepthLimit`<sup>Optional</sup> <a name="QueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit"></a>

```go
QueryDepthLimit *f64
```

- *Type:* *f64

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `ResolverCountLimit`<sup>Optional</sup> <a name="ResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit"></a>

```go
ResolverCountLimit *f64
```

- *Type:* *f64

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig"></a>

```go
UserPoolConfig AppsyncGraphQlApiUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `XrayEnabled`<sup>Optional</sup> <a name="XrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled"></a>

```go
XrayEnabled interface{}
```

- *Type:* interface{}

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

### AppsyncGraphQlApiEnhancedMetricsConfig <a name="AppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiEnhancedMetricsConfig {
	DataSourceLevelMetricsBehavior: *string,
	OperationLevelMetricsConfig: *string,
	ResolverLevelMetricsBehavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">DataSourceLevelMetricsBehavior</a></code> | <code>*string</code> | Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">OperationLevelMetricsConfig</a></code> | <code>*string</code> | Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">ResolverLevelMetricsBehavior</a></code> | <code>*string</code> | Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:. |

---

##### `DataSourceLevelMetricsBehavior`<sup>Optional</sup> <a name="DataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```go
DataSourceLevelMetricsBehavior *string
```

- *Type:* *string

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

##### `OperationLevelMetricsConfig`<sup>Optional</sup> <a name="OperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```go
OperationLevelMetricsConfig *string
```

- *Type:* *string

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

##### `ResolverLevelMetricsBehavior`<sup>Optional</sup> <a name="ResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```go
ResolverLevelMetricsBehavior *string
```

- *Type:* *string

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

### AppsyncGraphQlApiLambdaAuthorizerConfig <a name="AppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiLambdaAuthorizerConfig {
	AuthorizerResultTtlInSeconds: *f64,
	AuthorizerUri: *string,
	IdentityValidationExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```go
IdentityValidationExpression *string
```

- *Type:* *string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiLogConfig <a name="AppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiLogConfig {
	CloudwatchLogsRoleArn: *string,
	ExcludeVerboseContent: interface{},
	FieldLogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>interface{}</code> | Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel">FieldLogLevel</a></code> | <code>*string</code> | The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL. |

---

##### `CloudwatchLogsRoleArn`<sup>Optional</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```go
CloudwatchLogsRoleArn *string
```

- *Type:* *string

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

##### `ExcludeVerboseContent`<sup>Optional</sup> <a name="ExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent"></a>

```go
ExcludeVerboseContent interface{}
```

- *Type:* interface{}

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

##### `FieldLogLevel`<sup>Optional</sup> <a name="FieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel"></a>

```go
FieldLogLevel *string
```

- *Type:* *string

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

### AppsyncGraphQlApiOpenIdConnectConfig <a name="AppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiOpenIdConnectConfig {
	AuthTtl: *f64,
	ClientId: *string,
	IatTtl: *f64,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The issuer for the OIDC configuration. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl"></a>

```go
AuthTtl *f64
```

- *Type:* *f64

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl"></a>

```go
IatTtl *f64
```

- *Type:* *f64

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiTags <a name="AppsyncGraphQlApiTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}.

---

### AppsyncGraphQlApiUserPoolConfig <a name="AppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

&appsyncgraphqlapi.AppsyncGraphQlApiUserPoolConfig {
	AppIdClientRegex: *string,
	AwsRegion: *string,
	DefaultAction: *string,
	UserPoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | The user pool ID. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex"></a>

```go
AppIdClientRegex *string
```

- *Type:* *string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```go
func ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```go
func ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```go
func ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```go
func AuthorizerResultTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```go
func AuthorizerUriInput() *string
```

- *Type:* *string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```go
func IdentityValidationExpressionInput() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiAdditionalAuthenticationProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```go
func Get(index *f64) AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```go
func ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```go
func ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```go
func AuthTtlInput() *f64
```

- *Type:* *f64

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```go
func IatTtlInput() *f64
```

- *Type:* *f64

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```go
func AuthTtl() *f64
```

- *Type:* *f64

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```go
func IatTtl() *f64
```

- *Type:* *f64

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```go
func PutLambdaAuthorizerConfig(value AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig"></a>

```go
func PutOpenIdConnectConfig(value AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig"></a>

```go
func PutUserPoolConfig(value AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```go
func ResetLambdaAuthorizerConfig()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig"></a>

```go
func ResetOpenIdConnectConfig()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig"></a>

```go
func ResetUserPoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```go
func LambdaAuthorizerConfig() AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```go
func OpenIdConnectConfig() AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```go
func UserPoolConfig() AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```go
func LambdaAuthorizerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput"></a>

```go
func OpenIdConnectConfigInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput"></a>

```go
func UserPoolConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```go
func ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId"></a>

```go
func ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```go
func AppIdClientRegexInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```go
func AppIdClientRegex() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiEnhancedMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior">ResetDataSourceLevelMetricsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig">ResetOperationLevelMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior">ResetResolverLevelMetricsBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceLevelMetricsBehavior` <a name="ResetDataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior"></a>

```go
func ResetDataSourceLevelMetricsBehavior()
```

##### `ResetOperationLevelMetricsConfig` <a name="ResetOperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig"></a>

```go
func ResetOperationLevelMetricsConfig()
```

##### `ResetResolverLevelMetricsBehavior` <a name="ResetResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior"></a>

```go
func ResetResolverLevelMetricsBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">DataSourceLevelMetricsBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">OperationLevelMetricsConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">ResolverLevelMetricsBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">DataSourceLevelMetricsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">OperationLevelMetricsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">ResolverLevelMetricsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="DataSourceLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```go
func DataSourceLevelMetricsBehaviorInput() *string
```

- *Type:* *string

---

##### `OperationLevelMetricsConfigInput`<sup>Optional</sup> <a name="OperationLevelMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```go
func OperationLevelMetricsConfigInput() *string
```

- *Type:* *string

---

##### `ResolverLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="ResolverLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```go
func ResolverLevelMetricsBehaviorInput() *string
```

- *Type:* *string

---

##### `DataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="DataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```go
func DataSourceLevelMetricsBehavior() *string
```

- *Type:* *string

---

##### `OperationLevelMetricsConfig`<sup>Required</sup> <a name="OperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```go
func OperationLevelMetricsConfig() *string
```

- *Type:* *string

---

##### `ResolverLevelMetricsBehavior`<sup>Required</sup> <a name="ResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```go
func ResolverLevelMetricsBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```go
func ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```go
func ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```go
func ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```go
func AuthorizerResultTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```go
func AuthorizerUriInput() *string
```

- *Type:* *string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```go
func IdentityValidationExpressionInput() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiLogConfigOutputReference <a name="AppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn">ResetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent">ResetExcludeVerboseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel">ResetFieldLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsRoleArn` <a name="ResetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```go
func ResetCloudwatchLogsRoleArn()
```

##### `ResetExcludeVerboseContent` <a name="ResetExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```go
func ResetExcludeVerboseContent()
```

##### `ResetFieldLogLevel` <a name="ResetFieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel"></a>

```go
func ResetFieldLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput">ExcludeVerboseContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput">FieldLogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">FieldLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```go
func CloudwatchLogsRoleArnInput() *string
```

- *Type:* *string

---

##### `ExcludeVerboseContentInput`<sup>Optional</sup> <a name="ExcludeVerboseContentInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```go
func ExcludeVerboseContentInput() interface{}
```

- *Type:* interface{}

---

##### `FieldLogLevelInput`<sup>Optional</sup> <a name="FieldLogLevelInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```go
func FieldLogLevelInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```go
func CloudwatchLogsRoleArn() *string
```

- *Type:* *string

---

##### `ExcludeVerboseContent`<sup>Required</sup> <a name="ExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```go
func ExcludeVerboseContent() interface{}
```

- *Type:* interface{}

---

##### `FieldLogLevel`<sup>Required</sup> <a name="FieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```go
func FieldLogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiOpenIdConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```go
func ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```go
func ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```go
func AuthTtlInput() *f64
```

- *Type:* *f64

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```go
func IatTtlInput() *f64
```

- *Type:* *f64

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```go
func AuthTtl() *f64
```

- *Type:* *f64

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```go
func IatTtl() *f64
```

- *Type:* *f64

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiTagsList <a name="AppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsyncGraphQlApiTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get"></a>

```go
func Get(index *f64) AppsyncGraphQlApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiTagsOutputReference <a name="AppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsyncGraphQlApiTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncGraphQlApiUserPoolConfigOutputReference <a name="AppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncgraphqlapi"

appsyncgraphqlapi.NewAppsyncGraphQlApiUserPoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncGraphQlApiUserPoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```go
func ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction"></a>

```go
func ResetDefaultAction()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId"></a>

```go
func ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```go
func AppIdClientRegexInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```go
func AppIdClientRegex() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



