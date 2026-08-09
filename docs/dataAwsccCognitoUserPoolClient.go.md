# `dataAwsccCognitoUserPoolClient` Submodule <a name="`dataAwsccCognitoUserPoolClient` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolClient <a name="DataAwsccCognitoUserPoolClient" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_user_pool_client awscc_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.NewDataAwsccCognitoUserPoolClient(scope Construct, id *string, config DataAwsccCognitoUserPoolClientConfig) DataAwsccCognitoUserPoolClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig">DataAwsccCognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig">DataAwsccCognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClient_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlows">AllowedOAuthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient">AllowedOAuthFlowsUserPoolClient</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthScopes">AllowedOAuthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference">DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.callbackUrLs">CallbackUrLs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.generateSecret">GenerateSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.logoutUrLs">LogoutUrLs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference">DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference">DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.accessTokenValidity"></a>

```go
func AccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `AllowedOAuthFlows`<sup>Required</sup> <a name="AllowedOAuthFlows" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlows"></a>

```go
func AllowedOAuthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOAuthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient"></a>

```go
func AllowedOAuthFlowsUserPoolClient() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AllowedOAuthScopes`<sup>Required</sup> <a name="AllowedOAuthScopes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthScopes"></a>

```go
func AllowedOAuthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.analyticsConfiguration"></a>

```go
func AnalyticsConfiguration() DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference">DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.authSessionValidity"></a>

```go
func AuthSessionValidity() *f64
```

- *Type:* *f64

---

##### `CallbackUrLs`<sup>Required</sup> <a name="CallbackUrLs" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.callbackUrLs"></a>

```go
func CallbackUrLs() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.defaultRedirectUri"></a>

```go
func DefaultRedirectUri() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```go
func EnablePropagateAdditionalUserContextData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enableTokenRevocation"></a>

```go
func EnableTokenRevocation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.explicitAuthFlows"></a>

```go
func ExplicitAuthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateSecret`<sup>Required</sup> <a name="GenerateSecret" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.generateSecret"></a>

```go
func GenerateSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idTokenValidity"></a>

```go
func IdTokenValidity() *f64
```

- *Type:* *f64

---

##### `LogoutUrLs`<sup>Required</sup> <a name="LogoutUrLs" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.logoutUrLs"></a>

```go
func LogoutUrLs() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```go
func PreventUserExistenceErrors() *string
```

- *Type:* *string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.readAttributes"></a>

```go
func ReadAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenRotation"></a>

```go
func RefreshTokenRotation() DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference">DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference</a>

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenValidity"></a>

```go
func RefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.supportedIdentityProviders"></a>

```go
func SupportedIdentityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tokenValidityUnits"></a>

```go
func TokenValidityUnits() DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference">DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.writeAttributes"></a>

```go
func WriteAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolClientAnalyticsConfiguration <a name="DataAwsccCognitoUserPoolClientAnalyticsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

&dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration {

}
```


### DataAwsccCognitoUserPoolClientConfig <a name="DataAwsccCognitoUserPoolClientConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

&dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_user_pool_client#id DataAwsccCognitoUserPoolClient#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolClientRefreshTokenRotation <a name="DataAwsccCognitoUserPoolClientRefreshTokenRotation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

&dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClientRefreshTokenRotation {

}
```


### DataAwsccCognitoUserPoolClientTokenValidityUnits <a name="DataAwsccCognitoUserPoolClientTokenValidityUnits" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

&dataawscccognitouserpoolclient.DataAwsccCognitoUserPoolClientTokenValidityUnits {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.NewDataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration">DataAwsccCognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```go
func UserDataShared() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration">DataAwsccCognitoUserPoolClientAnalyticsConfiguration</a>

---


### DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference <a name="DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.NewDataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds">RetryGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation">DataAwsccCognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `RetryGracePeriodSeconds`<sup>Required</sup> <a name="RetryGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds"></a>

```go
func RetryGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolClientRefreshTokenRotation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation">DataAwsccCognitoUserPoolClientRefreshTokenRotation</a>

---


### DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference <a name="DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolclient"

dataawscccognitouserpoolclient.NewDataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits">DataAwsccCognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits">DataAwsccCognitoUserPoolClientTokenValidityUnits</a>

---



