# `dataAwsccLambdaRuntimeAlias` Submodule <a name="`dataAwsccLambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeAlias <a name="DataAwsccLambdaRuntimeAlias" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.NewDataAwsccLambdaRuntimeAlias(scope Construct, id *string, config DataAwsccLambdaRuntimeAliasConfig) DataAwsccLambdaRuntimeAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig">DataAwsccLambdaRuntimeAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig">DataAwsccLambdaRuntimeAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAlias_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLambdaRuntimeAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle">ReleaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn">RuntimeVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility"></a>

```go
func Compatibility() DataAwsccLambdaRuntimeAliasCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReleaseLifecycle`<sup>Required</sup> <a name="ReleaseLifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle"></a>

```go
func ReleaseLifecycle() DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `RuntimeVersionArn`<sup>Required</sup> <a name="RuntimeVersionArn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn"></a>

```go
func RuntimeVersionArn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeAliasCompatibility <a name="DataAwsccLambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

&dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAliasCompatibility {

}
```


### DataAwsccLambdaRuntimeAliasConfig <a name="DataAwsccLambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

&dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAliasConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#id DataAwsccLambdaRuntimeAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeAliasReleaseLifecycle <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

&dataawscclambdaruntimealias.DataAwsccLambdaRuntimeAliasReleaseLifecycle {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeAliasCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.NewDataAwsccLambdaRuntimeAliasCompatibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaRuntimeAliasCompatibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```go
func IntegrationModels() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```go
func ManagedInstances() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaRuntimeAliasCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a>

---


### DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimealias"

dataawscclambdaruntimealias.NewDataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">DeprecationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">FunctionCreateBlockDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">FunctionUpdateBlockDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">ReleaseState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```go
func DeprecationDate() *string
```

- *Type:* *string

---

##### `FunctionCreateBlockDate`<sup>Required</sup> <a name="FunctionCreateBlockDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```go
func FunctionCreateBlockDate() *string
```

- *Type:* *string

---

##### `FunctionUpdateBlockDate`<sup>Required</sup> <a name="FunctionUpdateBlockDate" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```go
func FunctionUpdateBlockDate() *string
```

- *Type:* *string

---

##### `ReleaseState`<sup>Required</sup> <a name="ReleaseState" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```go
func ReleaseState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaRuntimeAliasReleaseLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a>

---



