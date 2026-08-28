# `dataAwsccLicensemanagerLicenseAssetRuleSet` Submodule <a name="`dataAwsccLicensemanagerLicenseAssetRuleSet` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseAssetRuleSet <a name="DataAwsccLicensemanagerLicenseAssetRuleSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSet(scope Construct, id *string, config DataAwsccLicensemanagerLicenseAssetRuleSetConfig) DataAwsccLicensemanagerLicenseAssetRuleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig">DataAwsccLicensemanagerLicenseAssetRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig">DataAwsccLicensemanagerLicenseAssetRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseAssetRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLicensemanagerLicenseAssetRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseAssetRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn">LicenseAssetRulesetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList">DataAwsccLicensemanagerLicenseAssetRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LicenseAssetRulesetArn`<sup>Required</sup> <a name="LicenseAssetRulesetArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn"></a>

```go
func LicenseAssetRulesetArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.rules"></a>

```go
func Rules() DataAwsccLicensemanagerLicenseAssetRuleSetRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.tags"></a>

```go
func Tags() DataAwsccLicensemanagerLicenseAssetRuleSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList">DataAwsccLicensemanagerLicenseAssetRuleSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseAssetRuleSetConfig <a name="DataAwsccLicensemanagerLicenseAssetRuleSetConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license_asset_rule_set#id DataAwsccLicensemanagerLicenseAssetRuleSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseAssetRuleSetRules <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRules" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRules {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements {

}
```


### DataAwsccLicensemanagerLicenseAssetRuleSetTags <a name="DataAwsccLicensemanagerLicenseAssetRuleSetTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

&dataawscclicensemanagerlicenseassetruleset.DataAwsccLicensemanagerLicenseAssetRuleSetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseAssetRuleSetRulesList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement">RuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRules">DataAwsccLicensemanagerLicenseAssetRuleSetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleStatement`<sup>Required</sup> <a name="RuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement"></a>

```go
func RuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRules">DataAwsccLicensemanagerLicenseAssetRuleSetRules</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement">InstanceRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement">LicenseConfigurationRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement">LicenseRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRuleStatement`<sup>Required</sup> <a name="InstanceRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement"></a>

```go
func InstanceRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a>

---

##### `LicenseConfigurationRuleStatement`<sup>Required</sup> <a name="LicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement"></a>

```go
func LicenseConfigurationRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a>

---

##### `LicenseRuleStatement`<sup>Required</sup> <a name="LicenseRuleStatement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement"></a>

```go
func LicenseRuleStatement() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement">DataAwsccLicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---


### DataAwsccLicensemanagerLicenseAssetRuleSetTagsList <a name="DataAwsccLicensemanagerLicenseAssetRuleSetTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlicenseassetruleset"

dataawscclicensemanagerlicenseassetruleset.NewDataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTags">DataAwsccLicensemanagerLicenseAssetRuleSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerLicenseAssetRuleSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetRuleSet.DataAwsccLicensemanagerLicenseAssetRuleSetTags">DataAwsccLicensemanagerLicenseAssetRuleSetTags</a>

---



