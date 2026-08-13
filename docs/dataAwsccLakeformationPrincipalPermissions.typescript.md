# `dataAwsccLakeformationPrincipalPermissions` Submodule <a name="`dataAwsccLakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLakeformationPrincipalPermissions <a name="DataAwsccLakeformationPrincipalPermissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions(scope: Construct, id: string, config: DataAwsccLakeformationPrincipalPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig">DataAwsccLakeformationPrincipalPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig">DataAwsccLakeformationPrincipalPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLakeformationPrincipalPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier">principalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```typescript
public readonly permissionsWithGrantOption: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal"></a>

```typescript
public readonly principal: DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `principalIdentifier`<sup>Required</sup> <a name="principalIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier"></a>

```typescript
public readonly principalIdentifier: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource"></a>

```typescript
public readonly resource: DataAwsccLakeformationPrincipalPermissionsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLakeformationPrincipalPermissionsConfig <a name="DataAwsccLakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsConfig: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions#id DataAwsccLakeformationPrincipalPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLakeformationPrincipalPermissionsPrincipal <a name="DataAwsccLakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsPrincipal: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResource <a name="DataAwsccLakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResource: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceDatabase <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceDatabase: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocation <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceDataLocation: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTag <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceLfTag: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceTable <a name="DataAwsccLakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceTable: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns = { ... }
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

const dataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard: dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceDataLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceLfTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```typescript
public get(index: number): DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```typescript
public readonly expression: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">dataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">lfTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```typescript
public readonly database: DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `dataCellsFilter`<sup>Required</sup> <a name="dataCellsFilter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```typescript
public readonly dataCellsFilter: DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```typescript
public readonly dataLocation: DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```typescript
public readonly lfTag: DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```typescript
public readonly table: DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableWildcard`<sup>Required</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceTable;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationPrincipalPermissions } from '@cdktn/provider-awscc'

new dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



