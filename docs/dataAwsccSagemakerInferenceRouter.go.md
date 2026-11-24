# `dataAwsccSagemakerInferenceRouter` Submodule <a name="`dataAwsccSagemakerInferenceRouter` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerInferenceRouter <a name="DataAwsccSagemakerInferenceRouter" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router awscc_sagemaker_inference_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouter(scope Construct, id *string, config DataAwsccSagemakerInferenceRouterConfig) DataAwsccSagemakerInferenceRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig">DataAwsccSagemakerInferenceRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig">DataAwsccSagemakerInferenceRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerInferenceRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerInferenceRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerInferenceRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerInferenceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerInferenceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterArn">InferenceRouterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterName">InferenceRouterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.routingTargets">RoutingTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList">DataAwsccSagemakerInferenceRouterRoutingTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList">DataAwsccSagemakerInferenceRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `InferenceRouterArn`<sup>Required</sup> <a name="InferenceRouterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterArn"></a>

```go
func InferenceRouterArn() *string
```

- *Type:* *string

---

##### `InferenceRouterName`<sup>Required</sup> <a name="InferenceRouterName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.inferenceRouterName"></a>

```go
func InferenceRouterName() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `RoutingTargets`<sup>Required</sup> <a name="RoutingTargets" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.routingTargets"></a>

```go
func RoutingTargets() DataAwsccSagemakerInferenceRouterRoutingTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList">DataAwsccSagemakerInferenceRouterRoutingTargetsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tags"></a>

```go
func Tags() DataAwsccSagemakerInferenceRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList">DataAwsccSagemakerInferenceRouterTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerInferenceRouterConfig <a name="DataAwsccSagemakerInferenceRouterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/sagemaker_inference_router#id DataAwsccSagemakerInferenceRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerInferenceRouterRoutingTargets <a name="DataAwsccSagemakerInferenceRouterRoutingTargets" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargets {

}
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig {

}
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig {

}
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig {

}
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig {

}
```


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations {

}
```


### DataAwsccSagemakerInferenceRouterTags <a name="DataAwsccSagemakerInferenceRouterTags" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

&dataawsccsagemakerinferencerouter.DataAwsccSagemakerInferenceRouterTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds">MaxTimeInBacklogSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTimeInBacklogSeconds`<sup>Required</sup> <a name="MaxTimeInBacklogSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds"></a>

```go
func MaxTimeInBacklogSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```go
func ErrorTopic() *string
```

- *Type:* *string

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```go
func SuccessTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">S3FailurePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```go
func NotificationConfig() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `S3FailurePath`<sup>Required</sup> <a name="S3FailurePath" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```go
func S3FailurePath() *string
```

- *Type:* *string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```go
func S3OutputPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```go
func ClientConfig() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```go
func OutputConfig() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinations</a>

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsList <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerInferenceRouterRoutingTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference <a name="DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference">RoutingPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets">DataAwsccSagemakerInferenceRouterRoutingTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig"></a>

```go
func AsyncInferenceConfig() DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">DataAwsccSagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList">DataAwsccSagemakerInferenceRouterRoutingTargetsDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoutingPreference`<sup>Required</sup> <a name="RoutingPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference"></a>

```go
func RoutingPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterRoutingTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterRoutingTargets">DataAwsccSagemakerInferenceRouterRoutingTargets</a>

---


### DataAwsccSagemakerInferenceRouterTagsList <a name="DataAwsccSagemakerInferenceRouterTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerInferenceRouterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerInferenceRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerInferenceRouterTagsOutputReference <a name="DataAwsccSagemakerInferenceRouterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccsagemakerinferencerouter"

dataawsccsagemakerinferencerouter.NewDataAwsccSagemakerInferenceRouterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerInferenceRouterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags">DataAwsccSagemakerInferenceRouterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerInferenceRouterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerInferenceRouter.DataAwsccSagemakerInferenceRouterTags">DataAwsccSagemakerInferenceRouterTags</a>

---



