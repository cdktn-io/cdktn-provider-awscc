# `dataAwsccEcsExpressGatewayService` Submodule <a name="`dataAwsccEcsExpressGatewayService` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsExpressGatewayService <a name="DataAwsccEcsExpressGatewayService" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service awscc_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayService(scope Construct, id *string, config DataAwsccEcsExpressGatewayServiceConfig) DataAwsccEcsExpressGatewayService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig">DataAwsccEcsExpressGatewayServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig">DataAwsccEcsExpressGatewayServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsExpressGatewayService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcsExpressGatewayService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcsExpressGatewayService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.activeConfigurations">ActiveConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.ecsManagedResourceArns">EcsManagedResourceArns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference">DataAwsccEcsExpressGatewayServiceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList">DataAwsccEcsExpressGatewayServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActiveConfigurations`<sup>Required</sup> <a name="ActiveConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.activeConfigurations"></a>

```go
func ActiveConfigurations() DataAwsccEcsExpressGatewayServiceActiveConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsList</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EcsManagedResourceArns`<sup>Required</sup> <a name="EcsManagedResourceArns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.ecsManagedResourceArns"></a>

```go
func EcsManagedResourceArns() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.infrastructureRoleArn"></a>

```go
func InfrastructureRoleArn() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.primaryContainer"></a>

```go
func PrimaryContainer() DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference</a>

---

##### `ScalingTarget`<sup>Required</sup> <a name="ScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.scalingTarget"></a>

```go
func ScalingTarget() DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.status"></a>

```go
func Status() DataAwsccEcsExpressGatewayServiceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference">DataAwsccEcsExpressGatewayServiceStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tags"></a>

```go
func Tags() DataAwsccEcsExpressGatewayServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList">DataAwsccEcsExpressGatewayServiceTagsList</a>

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskDefinitionArn"></a>

```go
func TaskDefinitionArn() *string
```

- *Type:* *string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsExpressGatewayServiceActiveConfigurations <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurations {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets {

}
```


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget {

}
```


### DataAwsccEcsExpressGatewayServiceConfig <a name="DataAwsccEcsExpressGatewayServiceConfig" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_express_gateway_service#id DataAwsccEcsExpressGatewayService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns {

}
```


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling {

}
```


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath {

}
```


### DataAwsccEcsExpressGatewayServiceNetworkConfiguration <a name="DataAwsccEcsExpressGatewayServiceNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceNetworkConfiguration {

}
```


### DataAwsccEcsExpressGatewayServicePrimaryContainer <a name="DataAwsccEcsExpressGatewayServicePrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServicePrimaryContainer {

}
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {

}
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment {

}
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials {

}
```


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets {

}
```


### DataAwsccEcsExpressGatewayServiceScalingTarget <a name="DataAwsccEcsExpressGatewayServiceScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceScalingTarget {

}
```


### DataAwsccEcsExpressGatewayServiceStatus <a name="DataAwsccEcsExpressGatewayServiceStatus" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceStatus {

}
```


### DataAwsccEcsExpressGatewayServiceTags <a name="DataAwsccEcsExpressGatewayServiceTags" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

&dataawsccecsexpressgatewayservice.DataAwsccEcsExpressGatewayServiceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths">IngressPaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn">ServiceRevisionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations">DataAwsccEcsExpressGatewayServiceActiveConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `IngressPaths`<sup>Required</sup> <a name="IngressPaths" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths"></a>

```go
func IngressPaths() DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer"></a>

```go
func PrimaryContainer() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a>

---

##### `ScalingTarget`<sup>Required</sup> <a name="ScalingTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget"></a>

```go
func ScalingTarget() DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a>

---

##### `ServiceRevisionArn`<sup>Required</sup> <a name="ServiceRevisionArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn"></a>

```go
func ServiceRevisionArn() *string
```

- *Type:* *string

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn"></a>

```go
func TaskDefinitionArn() *string
```

- *Type:* *string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurations">DataAwsccEcsExpressGatewayServiceActiveConfigurations</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamPrefix`<sup>Required</sup> <a name="LogStreamPrefix" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```go
func LogStreamPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLogsConfiguration`<sup>Required</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```go
func AwsLogsConfiguration() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials"></a>

```go
func RepositoryCredentials() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets"></a>

```go
func Secrets() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a>

---


### DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference <a name="DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount">MaxTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount">MinTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric"></a>

```go
func AutoScalingMetric() *string
```

- *Type:* *string

---

##### `AutoScalingTargetValue`<sup>Required</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```go
func AutoScalingTargetValue() *f64
```

- *Type:* *f64

---

##### `MaxTaskCount`<sup>Required</sup> <a name="MaxTaskCount" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount"></a>

```go
func MaxTaskCount() *f64
```

- *Type:* *f64

---

##### `MinTaskCount`<sup>Required</sup> <a name="MinTaskCount" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount"></a>

```go
func MinTaskCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget">DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies">ApplicationAutoScalingPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget">ScalableTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationAutoScalingPolicies`<sup>Required</sup> <a name="ApplicationAutoScalingPolicies" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies"></a>

```go
func ApplicationAutoScalingPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `ScalableTarget`<sup>Required</sup> <a name="ScalableTarget" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget"></a>

```go
func ScalableTarget() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn">ListenerRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups">LoadBalancerSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns">TargetGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `ListenerRuleArn`<sup>Required</sup> <a name="ListenerRuleArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn"></a>

```go
func ListenerRuleArn() *string
```

- *Type:* *string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `LoadBalancerSecurityGroups`<sup>Required</sup> <a name="LoadBalancerSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups"></a>

```go
func LoadBalancerSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `TargetGroupArns`<sup>Required</sup> <a name="TargetGroupArns" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns"></a>

```go
func TargetGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a>

---


### DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference <a name="DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath">IngressPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups">LogGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms">MetricAlarms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups">ServiceSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling"></a>

```go
func AutoScaling() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a>

---

##### `IngressPath`<sup>Required</sup> <a name="IngressPath" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath"></a>

```go
func IngressPath() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a>

---

##### `LogGroups`<sup>Required</sup> <a name="LogGroups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups"></a>

```go
func LogGroups() *[]*string
```

- *Type:* *[]*string

---

##### `MetricAlarms`<sup>Required</sup> <a name="MetricAlarms" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms"></a>

```go
func MetricAlarms() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceSecurityGroups`<sup>Required</sup> <a name="ServiceSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups"></a>

```go
func ServiceSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns">DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns</a>

---


### DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration">DataAwsccEcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceNetworkConfiguration">DataAwsccEcsExpressGatewayServiceNetworkConfiguration</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamPrefix`<sup>Required</sup> <a name="LogStreamPrefix" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```go
func LogStreamPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer">DataAwsccEcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLogsConfiguration`<sup>Required</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```go
func AwsLogsConfiguration() DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList">DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```go
func RepositoryCredentials() DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets"></a>

```go
func Secrets() DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList">DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServicePrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainer">DataAwsccEcsExpressGatewayServicePrimaryContainer</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials">DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference <a name="DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets">DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets">DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets</a>

---


### DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference <a name="DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceScalingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">MaxTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">MinTaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget">DataAwsccEcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```go
func AutoScalingMetric() *string
```

- *Type:* *string

---

##### `AutoScalingTargetValue`<sup>Required</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```go
func AutoScalingTargetValue() *f64
```

- *Type:* *f64

---

##### `MaxTaskCount`<sup>Required</sup> <a name="MaxTaskCount" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```go
func MaxTaskCount() *f64
```

- *Type:* *f64

---

##### `MinTaskCount`<sup>Required</sup> <a name="MinTaskCount" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```go
func MinTaskCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceScalingTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceScalingTarget">DataAwsccEcsExpressGatewayServiceScalingTarget</a>

---


### DataAwsccEcsExpressGatewayServiceStatusOutputReference <a name="DataAwsccEcsExpressGatewayServiceStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsExpressGatewayServiceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus">DataAwsccEcsExpressGatewayServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceStatus">DataAwsccEcsExpressGatewayServiceStatus</a>

---


### DataAwsccEcsExpressGatewayServiceTagsList <a name="DataAwsccEcsExpressGatewayServiceTagsList" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsExpressGatewayServiceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsExpressGatewayServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsExpressGatewayServiceTagsOutputReference <a name="DataAwsccEcsExpressGatewayServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsexpressgatewayservice"

dataawsccecsexpressgatewayservice.NewDataAwsccEcsExpressGatewayServiceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsExpressGatewayServiceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags">DataAwsccEcsExpressGatewayServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsExpressGatewayServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsExpressGatewayService.DataAwsccEcsExpressGatewayServiceTags">DataAwsccEcsExpressGatewayServiceTags</a>

---



