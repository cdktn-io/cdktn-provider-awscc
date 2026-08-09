# `dataAwsccApigatewayv2Integration` Submodule <a name="`dataAwsccApigatewayv2Integration` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2Integration <a name="DataAwsccApigatewayv2Integration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_integration awscc_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2Integration(scope Construct, id *string, config DataAwsccApigatewayv2IntegrationConfig) DataAwsccApigatewayv2Integration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig">DataAwsccApigatewayv2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig">DataAwsccApigatewayv2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2Integration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.DataAwsccApigatewayv2Integration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.DataAwsccApigatewayv2Integration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.DataAwsccApigatewayv2Integration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.DataAwsccApigatewayv2Integration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApigatewayv2Integration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApigatewayv2Integration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApigatewayv2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.credentialsArn">CredentialsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationMethod">IntegrationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationSubtype">IntegrationSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationUri">IntegrationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.payloadFormatVersion">PayloadFormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.requestParameters">RequestParameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.requestTemplates">RequestTemplates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.responseParameters">ResponseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap">DataAwsccApigatewayv2IntegrationResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference">DataAwsccApigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategy`<sup>Required</sup> <a name="ContentHandlingStrategy" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.contentHandlingStrategy"></a>

```go
func ContentHandlingStrategy() *string
```

- *Type:* *string

---

##### `CredentialsArn`<sup>Required</sup> <a name="CredentialsArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.credentialsArn"></a>

```go
func CredentialsArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IntegrationMethod`<sup>Required</sup> <a name="IntegrationMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationMethod"></a>

```go
func IntegrationMethod() *string
```

- *Type:* *string

---

##### `IntegrationSubtype`<sup>Required</sup> <a name="IntegrationSubtype" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationSubtype"></a>

```go
func IntegrationSubtype() *string
```

- *Type:* *string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `IntegrationUri`<sup>Required</sup> <a name="IntegrationUri" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.integrationUri"></a>

```go
func IntegrationUri() *string
```

- *Type:* *string

---

##### `PassthroughBehavior`<sup>Required</sup> <a name="PassthroughBehavior" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.passthroughBehavior"></a>

```go
func PassthroughBehavior() *string
```

- *Type:* *string

---

##### `PayloadFormatVersion`<sup>Required</sup> <a name="PayloadFormatVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.payloadFormatVersion"></a>

```go
func PayloadFormatVersion() *string
```

- *Type:* *string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.requestParameters"></a>

```go
func RequestParameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `RequestTemplates`<sup>Required</sup> <a name="RequestTemplates" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.requestTemplates"></a>

```go
func RequestTemplates() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.responseParameters"></a>

```go
func ResponseParameters() DataAwsccApigatewayv2IntegrationResponseParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap">DataAwsccApigatewayv2IntegrationResponseParametersMap</a>

---

##### `TemplateSelectionExpression`<sup>Required</sup> <a name="TemplateSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.templateSelectionExpression"></a>

```go
func TemplateSelectionExpression() *string
```

- *Type:* *string

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.tlsConfig"></a>

```go
func TlsConfig() DataAwsccApigatewayv2IntegrationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference">DataAwsccApigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2Integration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2IntegrationConfig <a name="DataAwsccApigatewayv2IntegrationConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

&dataawsccapigatewayv2integration.DataAwsccApigatewayv2IntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_integration#id DataAwsccApigatewayv2Integration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2IntegrationResponseParameters <a name="DataAwsccApigatewayv2IntegrationResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

&dataawsccapigatewayv2integration.DataAwsccApigatewayv2IntegrationResponseParameters {

}
```


### DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters <a name="DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

&dataawsccapigatewayv2integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters {

}
```


### DataAwsccApigatewayv2IntegrationTlsConfig <a name="DataAwsccApigatewayv2IntegrationTlsConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

&dataawsccapigatewayv2integration.DataAwsccApigatewayv2IntegrationTlsConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2IntegrationResponseParametersMap <a name="DataAwsccApigatewayv2IntegrationResponseParametersMap" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2IntegrationResponseParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayv2IntegrationResponseParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.get"></a>

```go
func Get(key *string) DataAwsccApigatewayv2IntegrationResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayv2IntegrationResponseParametersOutputReference <a name="DataAwsccApigatewayv2IntegrationResponseParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2IntegrationResponseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccApigatewayv2IntegrationResponseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters">ResponseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList">DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParameters">DataAwsccApigatewayv2IntegrationResponseParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters"></a>

```go
func ResponseParameters() DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList">DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2IntegrationResponseParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParameters">DataAwsccApigatewayv2IntegrationResponseParameters</a>

---


### DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList <a name="DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference <a name="DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters">DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters">DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters</a>

---


### DataAwsccApigatewayv2IntegrationTlsConfigOutputReference <a name="DataAwsccApigatewayv2IntegrationTlsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integration"

dataawsccapigatewayv2integration.NewDataAwsccApigatewayv2IntegrationTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayv2IntegrationTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">ServerNameToVerify</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfig">DataAwsccApigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerNameToVerify`<sup>Required</sup> <a name="ServerNameToVerify" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```go
func ServerNameToVerify() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2Integration.DataAwsccApigatewayv2IntegrationTlsConfig">DataAwsccApigatewayv2IntegrationTlsConfig</a>

---



