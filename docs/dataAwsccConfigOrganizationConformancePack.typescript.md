# `dataAwsccConfigOrganizationConformancePack` Submodule <a name="`dataAwsccConfigOrganizationConformancePack` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigOrganizationConformancePack <a name="DataAwsccConfigOrganizationConformancePack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/config_organization_conformance_pack awscc_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

new dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack(scope: Construct, id: string, config: DataAwsccConfigOrganizationConformancePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig">DataAwsccConfigOrganizationConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig">DataAwsccConfigOrganizationConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConfigOrganizationConformancePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConfigOrganizationConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigOrganizationConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList">DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackArn">organizationConformancePackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackName">organizationConformancePackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList">DataAwsccConfigOrganizationConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `conformancePackInputParameters`<sup>Required</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.conformancePackInputParameters"></a>

```typescript
public readonly conformancePackInputParameters: DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList">DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList</a>

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `organizationConformancePackArn`<sup>Required</sup> <a name="organizationConformancePackArn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackArn"></a>

```typescript
public readonly organizationConformancePackArn: string;
```

- *Type:* string

---

##### `organizationConformancePackName`<sup>Required</sup> <a name="organizationConformancePackName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.organizationConformancePackName"></a>

```typescript
public readonly organizationConformancePackName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tags"></a>

```typescript
public readonly tags: DataAwsccConfigOrganizationConformancePackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList">DataAwsccConfigOrganizationConformancePackTagsList</a>

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigOrganizationConformancePackConfig <a name="DataAwsccConfigOrganizationConformancePackConfig" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

const dataAwsccConfigOrganizationConformancePackConfig: dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/config_organization_conformance_pack#id DataAwsccConfigOrganizationConformancePack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigOrganizationConformancePackConformancePackInputParameters <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

const dataAwsccConfigOrganizationConformancePackConformancePackInputParameters: dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters = { ... }
```


### DataAwsccConfigOrganizationConformancePackTags <a name="DataAwsccConfigOrganizationConformancePackTags" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

const dataAwsccConfigOrganizationConformancePackTags: dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

new dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get"></a>

```typescript
public get(index: number): DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference <a name="DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

new dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters">DataAwsccConfigOrganizationConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigOrganizationConformancePackConformancePackInputParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackConformancePackInputParameters">DataAwsccConfigOrganizationConformancePackConformancePackInputParameters</a>

---


### DataAwsccConfigOrganizationConformancePackTagsList <a name="DataAwsccConfigOrganizationConformancePackTagsList" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

new dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConfigOrganizationConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConfigOrganizationConformancePackTagsOutputReference <a name="DataAwsccConfigOrganizationConformancePackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConfigOrganizationConformancePack } from '@cdktn/provider-awscc'

new dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags">DataAwsccConfigOrganizationConformancePackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConfigOrganizationConformancePackTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConformancePack.DataAwsccConfigOrganizationConformancePackTags">DataAwsccConfigOrganizationConformancePackTags</a>

---



