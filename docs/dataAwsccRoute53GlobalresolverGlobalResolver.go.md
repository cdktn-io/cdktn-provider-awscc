# `dataAwsccRoute53GlobalresolverGlobalResolver` Submodule <a name="`dataAwsccRoute53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverGlobalResolver <a name="DataAwsccRoute53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.NewDataAwsccRoute53GlobalresolverGlobalResolver(scope Construct, id *string, config DataAwsccRoute53GlobalresolverGlobalResolverConfig) DataAwsccRoute53GlobalresolverGlobalResolver
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig">DataAwsccRoute53GlobalresolverGlobalResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig">DataAwsccRoute53GlobalresolverGlobalResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolver_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolver_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolver_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolver_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverGlobalResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.globalResolverId">GlobalResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv4Addresses">IPv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv6Addresses">IPv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.observabilityRegion">ObservabilityRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList">DataAwsccRoute53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```go
func GlobalResolverId() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `IPv4Addresses`<sup>Required</sup> <a name="IPv4Addresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```go
func IPv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `IPv6Addresses`<sup>Required</sup> <a name="IPv6Addresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```go
func IPv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObservabilityRegion`<sup>Required</sup> <a name="ObservabilityRegion" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```go
func ObservabilityRegion() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tags"></a>

```go
func Tags() DataAwsccRoute53GlobalresolverGlobalResolverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList">DataAwsccRoute53GlobalresolverGlobalResolverTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverGlobalResolverConfig <a name="DataAwsccRoute53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

&dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_global_resolver#id DataAwsccRoute53GlobalresolverGlobalResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverGlobalResolverTags <a name="DataAwsccRoute53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

&dataawsccroute53globalresolverglobalresolver.DataAwsccRoute53GlobalresolverGlobalResolverTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverGlobalResolverTagsList <a name="DataAwsccRoute53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.NewDataAwsccRoute53GlobalresolverGlobalResolverTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53GlobalresolverGlobalResolverTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference <a name="DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverglobalresolver"

dataawsccroute53globalresolverglobalresolver.NewDataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags">DataAwsccRoute53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53GlobalresolverGlobalResolverTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverGlobalResolver.DataAwsccRoute53GlobalresolverGlobalResolverTags">DataAwsccRoute53GlobalresolverGlobalResolverTags</a>

---



