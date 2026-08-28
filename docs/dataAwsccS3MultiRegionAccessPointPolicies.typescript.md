# `dataAwsccS3MultiRegionAccessPointPolicies` Submodule <a name="`dataAwsccS3MultiRegionAccessPointPolicies` Submodule" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3MultiRegionAccessPointPolicies <a name="DataAwsccS3MultiRegionAccessPointPolicies" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_multi_region_access_point_policies awscc_s3_multi_region_access_point_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

new dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies(scope: Construct, id: string, config?: DataAwsccS3MultiRegionAccessPointPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig">DataAwsccS3MultiRegionAccessPointPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig">DataAwsccS3MultiRegionAccessPointPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPointPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isConstruct"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformElement"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPointPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3MultiRegionAccessPointPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3MultiRegionAccessPointPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_multi_region_access_point_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3MultiRegionAccessPointPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3MultiRegionAccessPointPoliciesConfig <a name="DataAwsccS3MultiRegionAccessPointPoliciesConfig" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicies } from '@cdktn/provider-awscc'

const dataAwsccS3MultiRegionAccessPointPoliciesConfig: dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicies.DataAwsccS3MultiRegionAccessPointPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---



