# `dataAwsccServicecatalogStackSetConstraint` Submodule <a name="`dataAwsccServicecatalogStackSetConstraint` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogStackSetConstraint <a name="DataAwsccServicecatalogStackSetConstraint" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

dataawsccservicecatalogstacksetconstraint.NewDataAwsccServicecatalogStackSetConstraint(scope Construct, id *string, config DataAwsccServicecatalogStackSetConstraintConfig) DataAwsccServicecatalogStackSetConstraint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig">DataAwsccServicecatalogStackSetConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig">DataAwsccServicecatalogStackSetConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

dataawsccservicecatalogstacksetconstraint.DataAwsccServicecatalogStackSetConstraint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

dataawsccservicecatalogstacksetconstraint.DataAwsccServicecatalogStackSetConstraint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

dataawsccservicecatalogstacksetconstraint.DataAwsccServicecatalogStackSetConstraint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

dataawsccservicecatalogstacksetconstraint.DataAwsccServicecatalogStackSetConstraint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccServicecatalogStackSetConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccServicecatalogStackSetConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogStackSetConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.accountList">AccountList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.adminRole">AdminRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.portfolioId">PortfolioId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.regionList">RegionList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.stackInstanceControl">StackInstanceControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.stackSetConstraintId">StackSetConstraintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `AccountList`<sup>Required</sup> <a name="AccountList" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.accountList"></a>

```go
func AccountList() *[]*string
```

- *Type:* *[]*string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.adminRole"></a>

```go
func AdminRole() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.portfolioId"></a>

```go
func PortfolioId() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.regionList"></a>

```go
func RegionList() *[]*string
```

- *Type:* *[]*string

---

##### `StackInstanceControl`<sup>Required</sup> <a name="StackInstanceControl" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.stackInstanceControl"></a>

```go
func StackInstanceControl() *string
```

- *Type:* *string

---

##### `StackSetConstraintId`<sup>Required</sup> <a name="StackSetConstraintId" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.stackSetConstraintId"></a>

```go
func StackSetConstraintId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogStackSetConstraintConfig <a name="DataAwsccServicecatalogStackSetConstraintConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccservicecatalogstacksetconstraint"

&dataawsccservicecatalogstacksetconstraint.DataAwsccServicecatalogStackSetConstraintConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogStackSetConstraint.DataAwsccServicecatalogStackSetConstraintConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/servicecatalog_stack_set_constraint#id DataAwsccServicecatalogStackSetConstraint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



