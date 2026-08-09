# `dataAwsccLambdaAlias` Submodule <a name="`dataAwsccLambdaAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaAlias <a name="DataAwsccLambdaAlias" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_alias awscc_lambda_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.NewDataAwsccLambdaAlias(scope Construct, id *string, config DataAwsccLambdaAliasConfig) DataAwsccLambdaAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig">DataAwsccLambdaAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig">DataAwsccLambdaAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.DataAwsccLambdaAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.DataAwsccLambdaAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.DataAwsccLambdaAlias_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.DataAwsccLambdaAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLambdaAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLambdaAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLambdaAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.aliasArn">AliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.provisionedConcurrencyConfig">ProvisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference">DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference">DataAwsccLambdaAliasRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.aliasArn"></a>

```go
func AliasArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrencyConfig`<sup>Required</sup> <a name="ProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.provisionedConcurrencyConfig"></a>

```go
func ProvisionedConcurrencyConfig() DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference">DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.routingConfig"></a>

```go
func RoutingConfig() DataAwsccLambdaAliasRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference">DataAwsccLambdaAliasRoutingConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaAliasConfig <a name="DataAwsccLambdaAliasConfig" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

&dataawscclambdaalias.DataAwsccLambdaAliasConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_alias#id DataAwsccLambdaAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaAliasProvisionedConcurrencyConfig <a name="DataAwsccLambdaAliasProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

&dataawscclambdaalias.DataAwsccLambdaAliasProvisionedConcurrencyConfig {

}
```


### DataAwsccLambdaAliasRoutingConfig <a name="DataAwsccLambdaAliasRoutingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

&dataawscclambdaalias.DataAwsccLambdaAliasRoutingConfig {

}
```


### DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights <a name="DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

&dataawscclambdaalias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference <a name="DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.NewDataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">ProvisionedConcurrentExecutions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfig">DataAwsccLambdaAliasProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedConcurrentExecutions`<sup>Required</sup> <a name="ProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```go
func ProvisionedConcurrentExecutions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaAliasProvisionedConcurrencyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasProvisionedConcurrencyConfig">DataAwsccLambdaAliasProvisionedConcurrencyConfig</a>

---


### DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList <a name="DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.NewDataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference <a name="DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.NewDataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight">FunctionWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights">DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `FunctionWeight`<sup>Required</sup> <a name="FunctionWeight" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight"></a>

```go
func FunctionWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights">DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeights</a>

---


### DataAwsccLambdaAliasRoutingConfigOutputReference <a name="DataAwsccLambdaAliasRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdaalias"

dataawscclambdaalias.NewDataAwsccLambdaAliasRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaAliasRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights">AdditionalVersionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList">DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfig">DataAwsccLambdaAliasRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalVersionWeights`<sup>Required</sup> <a name="AdditionalVersionWeights" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights"></a>

```go
func AdditionalVersionWeights() DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList">DataAwsccLambdaAliasRoutingConfigAdditionalVersionWeightsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaAlias.DataAwsccLambdaAliasRoutingConfig">DataAwsccLambdaAliasRoutingConfig</a>

---



