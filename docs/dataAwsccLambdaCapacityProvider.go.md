# `dataAwsccLambdaCapacityProvider` Submodule <a name="`dataAwsccLambdaCapacityProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaCapacityProvider <a name="DataAwsccLambdaCapacityProvider" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_capacity_provider awscc_lambda_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProvider(scope Construct, id *string, config DataAwsccLambdaCapacityProviderConfig) DataAwsccLambdaCapacityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig">DataAwsccLambdaCapacityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig">DataAwsccLambdaCapacityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaCapacityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLambdaCapacityProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLambdaCapacityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLambdaCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.capacityProviderName">CapacityProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.capacityProviderScalingConfig">CapacityProviderScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference">DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.permissionsConfig">PermissionsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference">DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.propagateTags">PropagateTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference">DataAwsccLambdaCapacityProviderPropagateTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList">DataAwsccLambdaCapacityProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference">DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference">DataAwsccLambdaCapacityProviderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityProviderName`<sup>Required</sup> <a name="CapacityProviderName" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.capacityProviderName"></a>

```go
func CapacityProviderName() *string
```

- *Type:* *string

---

##### `CapacityProviderScalingConfig`<sup>Required</sup> <a name="CapacityProviderScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.capacityProviderScalingConfig"></a>

```go
func CapacityProviderScalingConfig() DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.instanceRequirements"></a>

```go
func InstanceRequirements() DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference">DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `PermissionsConfig`<sup>Required</sup> <a name="PermissionsConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.permissionsConfig"></a>

```go
func PermissionsConfig() DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference">DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference</a>

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.propagateTags"></a>

```go
func PropagateTags() DataAwsccLambdaCapacityProviderPropagateTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference">DataAwsccLambdaCapacityProviderPropagateTagsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.tags"></a>

```go
func Tags() DataAwsccLambdaCapacityProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList">DataAwsccLambdaCapacityProviderTagsList</a>

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.telemetryConfig"></a>

```go
func TelemetryConfig() DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference">DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccLambdaCapacityProviderVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference">DataAwsccLambdaCapacityProviderVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig <a name="DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig {

}
```


### DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies <a name="DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies {

}
```


### DataAwsccLambdaCapacityProviderConfig <a name="DataAwsccLambdaCapacityProviderConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_capacity_provider#id DataAwsccLambdaCapacityProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaCapacityProviderInstanceRequirements <a name="DataAwsccLambdaCapacityProviderInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderInstanceRequirements {

}
```


### DataAwsccLambdaCapacityProviderPermissionsConfig <a name="DataAwsccLambdaCapacityProviderPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderPermissionsConfig {

}
```


### DataAwsccLambdaCapacityProviderPropagateTags <a name="DataAwsccLambdaCapacityProviderPropagateTags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderPropagateTags {

}
```


### DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags <a name="DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags {

}
```


### DataAwsccLambdaCapacityProviderTags <a name="DataAwsccLambdaCapacityProviderTags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderTags {

}
```


### DataAwsccLambdaCapacityProviderTelemetryConfig <a name="DataAwsccLambdaCapacityProviderTelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderTelemetryConfig {

}
```


### DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig <a name="DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig {

}
```


### DataAwsccLambdaCapacityProviderVpcConfig <a name="DataAwsccLambdaCapacityProviderVpcConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

&dataawscclambdacapacityprovider.DataAwsccLambdaCapacityProviderVpcConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference <a name="DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount">MaxVCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode">ScalingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVCpuCount`<sup>Required</sup> <a name="MaxVCpuCount" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVCpuCount"></a>

```go
func MaxVCpuCount() *f64
```

- *Type:* *f64

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode"></a>

```go
func ScalingMode() *string
```

- *Type:* *string

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies"></a>

```go
func ScalingPolicies() DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfig</a>

---


### DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList <a name="DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference <a name="DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType">PredefinedMetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedMetricType`<sup>Required</sup> <a name="PredefinedMetricType" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType"></a>

```go
func PredefinedMetricType() *string
```

- *Type:* *string

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">DataAwsccLambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>

---


### DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference <a name="DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirements">DataAwsccLambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderInstanceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderInstanceRequirements">DataAwsccLambdaCapacityProviderInstanceRequirements</a>

---


### DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference <a name="DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderPermissionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn">CapacityProviderOperatorRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfig">DataAwsccLambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityProviderOperatorRoleArn`<sup>Required</sup> <a name="CapacityProviderOperatorRoleArn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn"></a>

```go
func CapacityProviderOperatorRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderPermissionsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPermissionsConfig">DataAwsccLambdaCapacityProviderPermissionsConfig</a>

---


### DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList <a name="DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference <a name="DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags">DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags">DataAwsccLambdaCapacityProviderPropagateTagsExplicitTags</a>

---


### DataAwsccLambdaCapacityProviderPropagateTagsOutputReference <a name="DataAwsccLambdaCapacityProviderPropagateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderPropagateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderPropagateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags">ExplicitTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList">DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTags">DataAwsccLambdaCapacityProviderPropagateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplicitTags`<sup>Required</sup> <a name="ExplicitTags" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.explicitTags"></a>

```go
func ExplicitTags() DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList">DataAwsccLambdaCapacityProviderPropagateTagsExplicitTagsList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderPropagateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderPropagateTags">DataAwsccLambdaCapacityProviderPropagateTags</a>

---


### DataAwsccLambdaCapacityProviderTagsList <a name="DataAwsccLambdaCapacityProviderTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaCapacityProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaCapacityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaCapacityProviderTagsOutputReference <a name="DataAwsccLambdaCapacityProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaCapacityProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTags">DataAwsccLambdaCapacityProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTags">DataAwsccLambdaCapacityProviderTags</a>

---


### DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference <a name="DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig">DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```go
func SystemLogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig">DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfig</a>

---


### DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference <a name="DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderTelemetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfig">DataAwsccLambdaCapacityProviderTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.loggingConfig"></a>

```go
func LoggingConfig() DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaCapacityProviderTelemetryConfigLoggingConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderTelemetryConfig">DataAwsccLambdaCapacityProviderTelemetryConfig</a>

---


### DataAwsccLambdaCapacityProviderVpcConfigOutputReference <a name="DataAwsccLambdaCapacityProviderVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdacapacityprovider"

dataawscclambdacapacityprovider.NewDataAwsccLambdaCapacityProviderVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaCapacityProviderVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfig">DataAwsccLambdaCapacityProviderVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaCapacityProviderVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCapacityProvider.DataAwsccLambdaCapacityProviderVpcConfig">DataAwsccLambdaCapacityProviderVpcConfig</a>

---



