# `appstreamDirectoryConfig` Submodule <a name="`appstreamDirectoryConfig` Submodule" id="@cdktn/provider-awscc.appstreamDirectoryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamDirectoryConfig <a name="AppstreamDirectoryConfig" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config awscc_appstream_directory_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

new appstreamDirectoryConfig.AppstreamDirectoryConfig(scope: Construct, id: string, config: AppstreamDirectoryConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties">putCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetCertificateBasedAuthProperties">resetCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateBasedAuthProperties` <a name="putCertificateBasedAuthProperties" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties"></a>

```typescript
public putCertificateBasedAuthProperties(value: AppstreamDirectoryConfigCertificateBasedAuthProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials"></a>

```typescript
public putServiceAccountCredentials(value: AppstreamDirectoryConfigServiceAccountCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `resetCertificateBasedAuthProperties` <a name="resetCertificateBasedAuthProperties" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetCertificateBasedAuthProperties"></a>

```typescript
public resetCertificateBasedAuthProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamDirectoryConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamDirectoryConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamDirectoryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamDirectoryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamDirectoryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference">AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthPropertiesInput">certificateBasedAuthPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput">directoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput">organizationalUnitDistinguishedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateBasedAuthProperties`<sup>Required</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthProperties"></a>

```typescript
public readonly certificateBasedAuthProperties: AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference">AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a>

---

##### `certificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="certificateBasedAuthPropertiesInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthPropertiesInput"></a>

```typescript
public readonly certificateBasedAuthPropertiesInput: IResolvable | AppstreamDirectoryConfigCertificateBasedAuthProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNamesInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNamesInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNamesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput"></a>

```typescript
public readonly serviceAccountCredentialsInput: IResolvable | AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

```typescript
public readonly organizationalUnitDistinguishedNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamDirectoryConfigCertificateBasedAuthProperties <a name="AppstreamDirectoryConfigCertificateBasedAuthProperties" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

const appstreamDirectoryConfigCertificateBasedAuthProperties: appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#certificate_authority_arn AppstreamDirectoryConfig#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#status AppstreamDirectoryConfig#status}. |

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#certificate_authority_arn AppstreamDirectoryConfig#certificate_authority_arn}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#status AppstreamDirectoryConfig#status}.

---

### AppstreamDirectoryConfigConfig <a name="AppstreamDirectoryConfigConfig" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

const appstreamDirectoryConfigConfig: appstreamDirectoryConfig.AppstreamDirectoryConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName">directoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#certificate_based_auth_properties AppstreamDirectoryConfig#certificate_based_auth_properties}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames"></a>

```typescript
public readonly organizationalUnitDistinguishedNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}.

---

##### `certificateBasedAuthProperties`<sup>Optional</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.certificateBasedAuthProperties"></a>

```typescript
public readonly certificateBasedAuthProperties: AppstreamDirectoryConfigCertificateBasedAuthProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#certificate_based_auth_properties AppstreamDirectoryConfig#certificate_based_auth_properties}.

---

### AppstreamDirectoryConfigServiceAccountCredentials <a name="AppstreamDirectoryConfigServiceAccountCredentials" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

const appstreamDirectoryConfigServiceAccountCredentials: appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword">accountPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}.

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

```typescript
public readonly accountPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference <a name="AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

new appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">resetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```typescript
public resetCertificateAuthorityArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamDirectoryConfigCertificateBasedAuthProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---


### AppstreamDirectoryConfigServiceAccountCredentialsOutputReference <a name="AppstreamDirectoryConfigServiceAccountCredentialsOutputReference" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktn/provider-awscc'

new appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput">accountPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword">accountPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `accountPasswordInput`<sup>Optional</sup> <a name="accountPasswordInput" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput"></a>

```typescript
public readonly accountPasswordInput: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword"></a>

```typescript
public readonly accountPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---



